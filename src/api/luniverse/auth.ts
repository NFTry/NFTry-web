import axios from 'axios';

import {
  IS_LOCAL,
  LUNIVERSE_API_KEY_ID,
  LUNIVERSE_API_KEY_SECRET,
  LUNIVERSE_NODE_ID,
} from '~/constants';

interface Token {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  'not-before-policy': number;
  session_state: string;
  scope: string;
}

export const getAccessToken = async () => {
  if (IS_LOCAL) {
    localStorage.setItem(
      'luniverse_access_token',
      'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoYkg5RmlFMkZfcEFSY2RWeWxGaHNtVVY1blZfOEVGYXN4VlVyajVtRU9JIn0.eyJleHAiOjE2ODY0ODY0MjgsImlhdCI6MTY4NTg4MTYyOCwianRpIjoiMTg0MzljMjAtYWM0OC00YjcxLWJmZTctNDVkZDVjNzk1N2JkIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmx1bml2ZXJzZS5jb206MzEwMC9yZWFsbXMvbm92YSIsInN1YiI6IjY3MTAwYjQwLTJhZDctNDBkNi1iMGI4LTkxYjk1N2ZhYjk3ZiIsInR5cCI6IkJlYXJlciIsImF6cCI6IjE2ODU4MDY1NDEwMjc3MzU3ODkiLCJzZXNzaW9uX3N0YXRlIjoiNDk4NWQ0MGEtMzEwYS00MjQ5LTk1OTEtNTM0ODNiYzE5ZGVjIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW5vdmEiXX0sInNjb3BlIjoicHJvZmlsZSIsInNpZCI6IjQ5ODVkNDBhLTMxMGEtNDI0OS05NTkxLTUzNDgzYmMxOWRlYyIsInByZWZlcnJlZF91c2VybmFtZSI6IjE2ODU4MDY1NDEwMjc3MzU3ODk6anRjdnRrc2NhbWZ1ZGRneHVra3k5MnN5aXFqemFtOG1nZWJ3eXUycGhjZ3hkeGhodmRlZmY0ZHJjc3pxcWV3cyIsImdyYW50Ijp7InByb3RvY29scyI6IjIiLCJhY2NvdW50cyI6IjIiLCJibG9ja3MiOiIyIiwidHJhbnNhY3Rpb25zIjoiMiIsImFzc2V0cyI6IjIiLCJldmVudHMiOiIyIiwic3RhdHMiOiIyIiwid2ViaG9va3MiOiIyIn19.hnU8n2zExEdoLOJJ87EeD8fc5dPkQ2siyaxdKui3jsvbtN0YzhSJiE-ywX8bSs93whM0Ih2DELwerX8dWvDrgT9D-XgvMPN0DWyixs-yPDLChi8NfJzTWkr8S_Qi-Lvu8Ff8U7xjPbbqduj1qU6U0RY-ft4yDTKAiaDVy9D6S9kzm2L2mRKoKWQPMOxX-h4gMfr0UdNU-rGmG2TmQNGUyF1ywD9GBrWkxZNNHagFYGI70leR3Rsa-HJvJIZdEfKCs50kvKO7rLPHCwp9rwBADmCM62Sp0KUmFNz-2QUqJ80x7cB-mAHZH9uxEg_pzu4kIlF9dc2xmlG5FuKlbxmskA'
    );
    localStorage.setItem('luniverse_access_token_expire', `${Date.now() + 604800 * 1000}`);
  }

  const currentAccessToken = localStorage.getItem('luniverse_access_token');
  const currentAccessTokenExpire = localStorage.getItem('luniverse_access_token_expire');

  if (
    currentAccessToken &&
    currentAccessTokenExpire &&
    Number(currentAccessTokenExpire) > Date.now() + 60 * 60 * 1000
  ) {
    // do nothing
    return;
  }

  const res = (
    await axios.post<Token>('/api/auth-token', {
      'x-node-id': LUNIVERSE_NODE_ID,
      'x-key-id': LUNIVERSE_API_KEY_ID,
      'x-key-secret': LUNIVERSE_API_KEY_SECRET,
    })
  ).data;

  localStorage.setItem('luniverse_access_token', res.access_token);
  localStorage.setItem('luniverse_access_token_expire', `${Date.now() + res.expires_in * 1000}`);
};
