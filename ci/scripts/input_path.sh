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

# Provide the input file path relative to the project root
echo "inputs/day${padded}.txt"
