#!/bin/bash

function build() {
  tar -czf emprestimo-web.tar.gz public/
}
function sendProject(){
  scp emprestimo-web.tar.gz root@emprestimo-web.com:/root
}
function uncompress() {
  ssh root@emprestimo-web.com tar -xf /root/emprestimo-web.tar.gz
}

function remove_files() {
  ssh root@emprestimo-web.com rm -rf /opt/emprestimo-web/static/emprestimo-web
  sleep 1
}
function move_files() {
  ssh root@emprestimo-web.com cp -rf  /root/public /opt/emprestimo-web/static/emprestimo-web
}

function execute () {
  build
  sleep 1
  sendProject
  sleep 1
  uncompress
  sleep 1
  remove_files
  sleep 1
  move_files
}
case "$1" in
      build) build
      ;;
      uncompress) uncompress
      ;;
      send) sendProject
      ;;
      remove) remove_files
      ;;
      move) move_files
      ;;
      execute) execute
      ;;
      *)
           echo $"Usage: $0 {init|build|move|send|remove|uncompress}"
           exit 1
esac
