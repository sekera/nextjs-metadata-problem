#!/bin/zsh

script_dir="${0:A:h}"
target_dir="${script_dir}/.."

(cd $target_dir; 
    npm link ../Glueo.Web/ClientApp;
    npm link ../glueo-web-reactcomponents;
)

