#!/bin/bash

# Compile TypeScript code
tsc

# Check if compilation was successful
if [ $? -eq 0 ]; then
    echo "Compilation successful. Running the code..."
    # Run JavaScript code using Node.js
    node index.js
else
    echo "Compilation failed. Please check your TypeScript code for errors."
fi
