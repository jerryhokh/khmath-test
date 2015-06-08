1) How to install dependencies
	> npm install
2) How to start Selenium server
	> webdriver-manager start
3) How to start protractor
	> protractor protractor.conf.js

	Test Script #1: Student Gameplay
    ================================

    1. Overview: To go through student gameplay and earn 1 star

    2. ACTION: Log in

    a. https://alpha.khmath.com

    b. User: Angelo, Password: abcd

    3. “Challenges” page will load

    4. EXPECTED: XP counter > 1 (show the counter works)

    5. EXPECTED: Stars counter > 1 (show the counter works)

    . https://lh6.googleusercontent.com/57u2SMRrcrjx05hpb_1HUH49YrbKoP5toR3F6psPedeQkvmkvMoES2NMkZiz8FF40P26pV2RSaVitdDRoZKKWDXs5IOV_4rp_j-vYL2gUjWLFcMM7Bi52wR7ClrnF_MH_WS24qc

    6. Click on “Properties of Linear Relationships” and click First activity #1

    . https://lh5.googleusercontent.com/5O9p730249a41sDLtLn0gHY45mDWi6iAjey_OeWRpawQjKbnOfEPNrD8ItjGdiM8EbbbGwFxrRY_bH11EhKcH8DAMn2oMeGzc_C7pN7MV4n99ToH78pabHCXiLhbbLJtq7UA2rQ

    7. Click past the “Example” page

    . https://lh3.googleusercontent.com/xXDnOD6fugtrWxD2VzY8TDh8OFNMT4-JvEfuUVPGyPnjXFgovqa-X8PUQwdgrU4BgInIPLJsRDTbwxaPe89gzUScRNLviFUC8QqT9WfyyZ7wnM1qAgEWzuJE-e8xeo8EeMUkN44

    8. The 3 questions will appear

    9. Answer first one correctly (the JSON should contain IsCorrect: true/false so you can pick correctly)

    . https://lh6.googleusercontent.com/hlPs460y2wDdruLEZH-_bwPqv5OQbn1jU9YIm_P-ceXoI19OWXwIDnKxxNTR8RqxC6Wq67czYSMNlthGdvbKYJUwOQjwC1n4rIQPzvdJi8Fg6C1gGYEjSogte8Ez6ES0rnoriXY

    10. EXPECTED: Should show this “Correct!” modal

    . https://lh3.googleusercontent.com/izK6jiyiqlEtgDTXKSyYKAXdYXmO2rs4m-nVSobNjB6yQPHbbobHl8mM9VD9R9Af7zPZ7icW3lf9aSvfJSciLriGb4CdfBNhtYYXvl99Hreoz1LwKYrMbXcoiB-u_MDxxLQTFfI

    11. Click Upload Solution to upload a small JPG

    12. EXPECTED: Should show “Upload Successful” message

    13. Continue to Question 2

    14. Answer Incorrectly

    15. EXPECTED: Should show “Incorrect, try again” message

    . https://lh5.googleusercontent.com/nLTAbmEQQFjDFS3k-BAIux5RoZGaWvQb35VZzHjbMXVSh_6Vk3g_6OquS9lclr0K0RxQaDp1vfeelutMu_dU5Me1uOxYZi-l9SCOnPpjgseEach5iY3XfNnMdkWE9gPqArupEjw

    16. Answer Correctly on the 2nd guess

    17. EXPECTED: Should load “Correct” modal

    . https://lh5.googleusercontent.com/PyqUtiGFRFqf1EfSmYmJMit7o8guKvZXs9c6soXD_6ihs0HoYJJiw6bQeZI1AMQ-pA6KHHt5Wivx2cGbVqpmsPqR5FmjEaJFT6caERst9KFX1i3cttcTQ5FWwrVHHNAB58wocng

    18. On the 3rd question, select 2 wrong answers

    19. EXPECTED: Should load this “Oops!” alert

    . https://lh3.googleusercontent.com/D4Euzw6tLs46DAHqoGp6najsYo-RPCFy8VurVj3Y4xqoFs3IersitcTpOMuFqvwnF1x63qc0Sq1vrUhRH8QZGOrgMqXWkhYn1h_Yu9sxppDXkv1nJiAsKExjbWMS8hhRe2s6NAM

    20. Click “Continue”

    21. EXPECTED: Should load the Summary modal with 1 star (see JSON)

    . https://lh6.googleusercontent.com/25oRCXClTxM9J-Roj0-tKdQ4z9ZdA03c4IM1P3KvTFj4vOL8V51gMCSjAb1ZkqMc-dK-rrJkp3HORN4_IXcX3_SmC1Q4OdW1bUNO4R0umNH-hfIsiWiyPz1BlAT7NosxeD4t8Fw

    a. https://lh6.googleusercontent.com/nQ4JX9-g7pVk4CgtwTdPkAkFORSG0lgKMwwz24RsOGeyu6RdmFB8DnAYLah_nRT2D8ggGXGaCbUPOHuuvewV1coTJDDMLtUQAEJD-5K9VGF068FfoHxgqQ6Gv64OYTIujXOq_0o

    22. Click “Home”

    23. EXPECTED: Should return to “Challenges” page