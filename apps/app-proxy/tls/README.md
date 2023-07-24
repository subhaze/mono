This folder is used to house the key/cert for local development, they should **not** be committed to git and not shared with anyone.

They're created using [mkcert](https://github.com/FiloSottile/mkcert), a fantastic lib for creating and installing (for most browser/OS variants) a root CA. With the root CA it'll create site certs from it, so all you need is your browser/OS to trust the root CA.