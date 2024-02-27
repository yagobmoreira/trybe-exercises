def validate_email(email: str):
    user_name, web_site = email.split("@")
    web_site_name, extension = web_site.split(".")

    index = 0

    if not (user_name[0].isalpha()):
        raise ValueError("Username should start with letter")

    while index < len(user_name):
        letter = user_name[index]
        not_letter = not letter.isalpha()
        not_digit = not letter.isdigit()
        if not_letter and not_digit and letter not in ("_", "-"):
            raise ValueError(
                """Username should contain only letters, digits,
                dashes or underscores"""
            )

        index += 1

    index = 0

    while index < len(web_site_name):
        letter = web_site_name[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("Website should contain only letters, and digits")
        index += 1

    if len(extension) > 3:
        raise ValueError("Extension maximum length is 3")


validate_email("teste@teste.com")
