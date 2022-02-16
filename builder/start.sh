#!/bin/bash
bubblewrap update --manifest=/twa-manifest.json
yes | bubblewrap build --manifest=/twa-manifest.json

