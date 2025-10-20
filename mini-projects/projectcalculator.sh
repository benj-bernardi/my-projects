#!/bin/bash

while true; do
    echo " "
    echo "- CALCULATOR -"
    echo "1 - ADDITION"
    echo "2 - SUBTRACTION"
    echo "3 - MULTIPLICATION"
    echo "4 - DIVISION"
    echo "5 - MULTIPLICATION TABLE"
    echo "6 - EXIT"

    read -p "Choose an option: " option

    case $option in
        1)
            read -p "Enter the first number: " num1
            read -p "Enter the second number: " num2
            echo "$num1 + $num2 = $((num1 + num2))"
            ;;
        2)
            read -p "Enter the first number: " num3
            read -p "Enter the second number: " num4
            echo "$num3 - $num4 = $((num3 - num4))"
            ;;
        3)
            read -p "Enter the first number: " num5
            read -p "Enter the second number: " num6
            echo "$num5 x $num6 = $((num5 * num6))"
            ;;
        4)
            read -p "Enter the first number: " num7
            read -p "Enter the second number: " num8
            if [ $num8 -eq 0 ]; then
                echo "You can't divide by zero!"
            else
                echo "$num7 / $num8 = $((num7 / num8))"
            fi
            ;;
        5)
            read -p "Enter a number for the multiplication table: " num9
            for i in {1..10}; do
                echo "$num9 x $i = $(($num9 * $i))"
            done
            ;;
        6)
            echo "Exiting..."
            break
            ;;
        *)
            echo "Invalid option!"
            ;;
    esac
done
