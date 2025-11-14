from sdk_package import IntuneClient


def run():
    client = IntuneClient(base_url="https://api.intunelabs.example", token="<token>")
    response = client.get("/health")
    print(response.json())


if __name__ == "__main__":
    run()
