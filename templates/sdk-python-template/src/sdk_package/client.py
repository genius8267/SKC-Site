from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, Optional

import httpx


@dataclass
class IntuneClient:
    """Minimal HTTP client template with sync requests."""

    base_url: str
    token: str
    timeout: float = 10.0

    def _headers(self) -> Dict[str, str]:
        return {
            "Authorization": f"Bearer {self.token}",
            "User-Agent": "intune-sdk-python/0.1.0",
        }

    def get(self, path: str, params: Optional[Dict[str, Any]] = None) -> httpx.Response:
        with httpx.Client(base_url=self.base_url, timeout=self.timeout) as client:
            response = client.get(path, params=params, headers=self._headers())
            response.raise_for_status()
            return response
