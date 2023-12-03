#!/bin/sh
set -e

AOC_DAY=$1

# Ensure AOC_DAY is set
if [ -z "$AOC_DAY" ]; then
    echo "env var AOC_DAY must be set"
    exit 1
fi

# Zero-pad the day to 2 digits
padded=$(printf "%02d" "$AOC_DAY")
expected="inputs/day${padded}.txt"

# The specification says that if an input does not exist for a given day, we
# need to exit with a nonzero code.
if [ -f "$expected" ]; then
    echo "$expected"
else
    echo "no input for day ${AOC_DAY}"
    exit 1
fi