#!/usr/bin/env bash
set -e

HERE="$(dirname "${BASH_SOURCE[0]}")"

godir="$HERE/../go"
$HOME/go/bin/catan || true
while true; do
    file=$(fswatch -1 "$godir" -e ".*" -i "\\.go$";)
    echo 'Detected go file changes'

    # Clean up existing processes
    running_wait_pids="$(jobs -rp)"
    if [[ $running_wait_pids ]]; then
        kill $running_wait_pids;
    fi

    # Catch build errors locally and print, otherwise restart server
    errors=$(
        cd "$godir" && \
        go install catan 2>&1 || true
    )
    if [[ -z $errors ]]; then
        $HOME/go/bin/catan &
    else
        echo "$errors"
    fi
done
