import time

from selenium import webdriver
from selenium.webdriver.common.by import By

driverOptions = webdriver.ChromeOptions()
driverOptions.add_argument("--start-maximized")
driverOptions.add_argument("--disable-extensions")
driverOptions.add_argument("--disable-logging")
driverOptions.add_argument("--log-level=3")
driverOptions.add_experimental_option("excludeSwitches", ["enable-logging"])
driverOptions.add_experimental_option("useAutomationExtension", False)

driver = webdriver.Chrome(options=driverOptions)
driver.get("http://localhost:5173/")


credentials = {
    "empty_credentials": {"email": "", "password": ""},
    "invalid_email": {"email": "abc.com", "password": "validpass123"},
    "invalid_password": {"email": "abc@gmail.com", "password": "123"},
    "invalid_credentials": {"email": "wrong@email.com", "password": "wrongpass123"},
    "valid_credentials": {"email": "abc@gmail.com", "password": "abc123.,"},
}

get_started_button = driver.find_element(By.CLASS_NAME, "get-started-button")


time.sleep(4)


get_started_button.click()

time.sleep(4)


email_input = driver.find_element(By.CLASS_NAME, "email-input")
password_input = driver.find_element(By.CLASS_NAME, "password-input")
login_button = driver.find_element(By.CLASS_NAME, "login-button")
time.sleep(4)


email_input.send_keys(credentials["invalid_email"]["email"])

time.sleep(4)

login_button.click()
login_button.click()

time.sleep(4)

email_input.clear()
time.sleep(4)

email_input.send_keys(credentials["empty_credentials"]["email"])
password_input.send_keys(credentials["empty_credentials"]["password"])

time.sleep(4)

login_button.click()
login_button.click()

time.sleep(4)

email_input.clear()
password_input.clear()

time.sleep(4)

email_input.send_keys(credentials["invalid_password"]["email"])
password_input.send_keys(credentials["invalid_password"]["password"])

time.sleep(4)

login_button.click()
login_button.click()

time.sleep(4)

email_input.clear()
password_input.clear()

time.sleep(4)
email_input.send_keys(credentials["invalid_credentials"]["email"])
password_input.send_keys(credentials["invalid_credentials"]["password"])

time.sleep(4)
login_button.click()
login_button.click()
time.sleep(4)
email_input.clear()
password_input.clear()

time.sleep(4)

email_input.send_keys(credentials["valid_credentials"]["email"])
password_input.send_keys(credentials["valid_credentials"]["password"])

time.sleep(4)

login_button.click()
login_button.click()

time.sleep(4)


driver.quit()
