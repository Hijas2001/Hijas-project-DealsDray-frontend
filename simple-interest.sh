#!/bin/bash

# Function to calculate simple interest
calculate_simple_interest() {
    principal=$1
    rate_of_interest=$2
    time_period=$3
    
    # Calculate simple interest
    simple_interest=$(echo "scale=2; $principal * $rate_of_interest * $time_period / 100" | bc)
    
    echo "The Simple Interest is: $simple_interest"
}

# Check if the correct number of arguments is provided
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <principal> <rate_of_interest> <time_period>"
    exit 1
fi

# Call the function with arguments
calculate_simple_interest $1 $2 $3
