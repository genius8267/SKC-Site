from sdk_package.client import IntuneClient


def test_headers_include_token():
    client = IntuneClient(base_url="https://api.example", token="secret")
    headers = client._headers()
    assert headers["Authorization"] == "Bearer secret"
