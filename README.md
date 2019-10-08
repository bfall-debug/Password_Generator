# Password_Generator
## Description

The password generator program automatically generates a randomly generated password based on the user criteria of what type of characters they would like to be included in their password.

* Character type:

  * Special characters 

  * Numeric characters

  * Lowercase characters

  * Uppercase characters

Additionally the user can also select the length of the password to be created.

* Length (must be between 8 and 128 characters)

The two buttons featured on the html page consist of:

* Generate Password Button

    * Prompts the User for:

        * The length of the password

        * If they would like to include special characters

        * If they would like to include numeric characters

        * If they would like to include lowercase characters

        * If they would like to include uppercase characters

    * Executes the code to generate a password based on the parameters

    * Updates the html webpage

        * The textarea with their new password

        * turns the Copy to Clipboard Button green

* Copy to Clipboard Button

    * copies the text in password textarea to the consoles clipboard

    * alerts the user with what has been copied

## Current Display and Link to Currently Active Site

To see the site in action please use the link below

https://bfall-debug.github.io/Password_Generator/

![password generator demo](./Assets/images/screenshot.PNG)

## List of Known Issues or Potential updates

* The generator doesnt guarentee all of your character selection paramters will be used

* The Copy to Clipboard button will still run even if the Generate Password Button hasn't been run yet.

* Have text in password be made from randomly generated words. For longer passwords words are strung together.
