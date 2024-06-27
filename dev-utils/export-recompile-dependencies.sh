#!/bin/zsh

script_dir="${0:A:h}"
command="$script_dir/../../../../DevOps/library/command-in-relative-dir.sh"

echo command: $command
chmod +x $command

$command "tools/src/Glueo.Web/ClientApp" "npm install"
$command "tools/src/Glueo.Web/ClientApp" "npm run pack"

$command "glueo-fork-jodit" "npm install"
$command "glueo-fork-jodit" "npm run pack"

$command "glueo-fork-jodit-react" "npm install"
$command "glueo-fork-jodit-react" "npm run pack"

$command "tools/src/htmlinstant" "npm install"
$command "tools/src/htmlinstant" "npm run export-debug"
