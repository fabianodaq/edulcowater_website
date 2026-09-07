"""Update product prices in js/products.js from products/prices.json."""

import json
import re
from pathlib import Path


# Legge i prezzi da prices.json e aggiorna i campi price nella const products.
SCRIPT_DIRECTORY = Path(__file__).resolve().parent
PRICES_FILE = SCRIPT_DIRECTORY / "prices.json"
PRODUCTS_FILE = SCRIPT_DIRECTORY.parent / "js" / "products.js"
PRODUCT_HEADER = re.compile(r"^    '([^']+)': \{\s*$")
PRICE_LINE = re.compile(r"^(\s+price:)\s*[^,]+(,\s*)$")


def load_prices():
    with PRICES_FILE.open("r", encoding="utf-8") as prices_file:
        prices = json.load(prices_file)

    if not isinstance(prices, dict):
        raise ValueError("prices.json deve contenere un oggetto prodotto/prezzo")

    for product_name, price in prices.items():
        if not isinstance(product_name, str):
            raise ValueError("Ogni nome prodotto deve essere una stringa")
        if not isinstance(price, (int, float)) or isinstance(price, bool):
            raise ValueError(f"Prezzo non valido per '{product_name}': {price!r}")

    return prices


def update_products_file(prices):
    original_text = PRODUCTS_FILE.read_text(encoding="utf-8")
    lines = original_text.splitlines(keepends=True)
    updated_lines = list(lines)
    product_ranges = {}

    current_product = None
    current_start = None
    for line_number, line in enumerate(lines):
        header_match = PRODUCT_HEADER.match(line.rstrip("\r\n"))
        if header_match:
            if current_product is not None:
                product_ranges[current_product] = (current_start, line_number)
            current_product = header_match.group(1)
            current_start = line_number
        elif current_product is not None and line.strip() == "};":
            product_ranges[current_product] = (current_start, line_number)
            current_product = None
            current_start = None

    if current_product is not None:
        product_ranges[current_product] = (current_start, len(lines))

    changed = False
    for product_name, new_price in prices.items():
        product_range = product_ranges.get(product_name)
        if product_range is None:
            print(f"NON TROVATO, NON AGGIORNATO: {product_name}")
            continue

        start, end = product_range
        price_line_number = None
        for line_number in range(start, end):
            if PRICE_LINE.match(lines[line_number].rstrip("\r\n")):
                price_line_number = line_number
                break

        if price_line_number is None:
            print(f"TROVATO, PREZZO ASSENTE, NON AGGIORNATO: {product_name}")
            continue

        line = lines[price_line_number]
        line_match = PRICE_LINE.match(line.rstrip("\r\n"))
        old_price = line_match.group(0).split(":", 1)[1].strip().rstrip(",")
        newline = "\r\n" if line.endswith("\r\n") else "\n"
        indentation = line_match.group(1)
        comma = line_match.group(2)
        formatted_price = f"{new_price:g}" if isinstance(new_price, float) else str(new_price)
        replacement = f"{indentation} {formatted_price}{comma}{newline}"

        if old_price == formatted_price:
            print(f"TROVATO, GIA AGGIORNATO: {product_name} = {formatted_price}")
        else:
            updated_lines[price_line_number] = replacement
            changed = True
            print(f"TROVATO E AGGIORNATO: {product_name}: {old_price} -> {formatted_price}")

    for product_name in product_ranges:
        if product_name not in prices:
            print(f"NEL JS MA ASSENTE IN prices.json: {product_name}")

    if changed:
        PRODUCTS_FILE.write_text("".join(updated_lines), encoding="utf-8", newline="")
        print(f"File aggiornato: {PRODUCTS_FILE}")
    else:
        print("Nessuna modifica necessaria.")


def main():
    try:
        prices = load_prices()
        update_products_file(prices)
    except (OSError, json.JSONDecodeError, ValueError) as error:
        print(f"ERRORE: {error}")
        raise SystemExit(1)


if __name__ == "__main__":
    main()