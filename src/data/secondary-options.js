export const secondaryOptions = {
  change: [
    {
      value: 'owner',
      label: 'the owner of a file',
      usage: 'chown <owner> <file>'
    },
    {
      value: 'directory',
      label: 'the ownership of a directory, and recursively all the files contained, plus all the subdirectories and the files contained in them, too.',
      usage: 'chown -R <owner> <folder>',
    },
    {
      value: 'group-permissions',
      label: 'the group of a file',
      usage: 'chgrp <group> <filename>',
    },
    {
      value: 'file-permissions',
      label: 'the permissions given to a file',
      usage: 'chmod <permissions> <filename>',
    }
  ],

  copy: [
    {
      value: 'copy-files',
      label: 'the contents of one file to another file',
      usage:
        'cp <file_1> <file_2>'
    },
    {
      value: 'copy-file-location',
      label: 'file from one location to another',
      usage: 'cp <file_name> <location>'
    },
    {
      value: 'copy-folder',
      label: 'folder from one place to another',
      usage: 'cp -r <folder_1> <location>'
    },
    {
      value: 'copy-multiple',
      label: 'multiple files to a single location',
      usage: 'cp <file_1> <file_2> ... <location>'
    }
  ],

  count: [
    {
      value: 'count-files',
      label: 'files in a directory',
      usage: 'ls | wc -l'
    },
    {
      value: 'count-lines',
      label: 'lines in a file',
      usage: 'wc -l <filename>',
    },
    {
      value: 'count-words',
      label: 'number of words in a file',
      usage: 'wc -w <filename>'
    },
    {
      value: 'count-bytes',
      label: 'number of bytes and characters',
      usage: 'wc -c <filename>'
    }
  ],

  create: [
    {
      value: 'new-file',
      label: 'a new file',
      nb: 'touch <filename>'
    },
    {
      value: 'new-folder',
      label: 'a new folder',
      nb: 'mkdir <foldername>'
    }
  ],

  execute: [
    {
      value: 'execute-file',
      label: 'a file',
      usage: './<filename>'
    }
  ],

  find: [
    {
      value: 'find-file',
      label: 'a file with specific name in current directory',
      usage: 'find . -name <filename>'
    },
    {
      value: 'find-empty',
      label: 'empty files and directories in the current directory',
      usage: 'find . -empty'
    },
    {
      value: 'find-file-perm',
      label: 'a file with entered permissions in the current directory',
      usage: 'find . -perm <permissions>'
    }
  ],

  list: [
    {
      value: 'all files and directories in the present working directory',
      label: 'all files and directories in the present working directory',
      usage: 'ls',
      nb:
        ''
    },
    {
      value: 'files in sub-directories as well',
      label: 'files in sub-directories as well',
      usage: 'ls -R',
    },
    {
      value: 'hidden files as well',
      label: 'hidden files as well',
      usage: 'ls -a'
    },
    {
      value: 'ls -al',
      label: 'ls -al',
      usage: 'files and directories with detailed information like permissions,size, owner, etc',
    }
  ],

  move: [
    {
      value: 'move-file',
      label: 'file from one folder to another',
      usage: 'mv <source> <destination>'
    },
    {
      value: 'move-files',
      label: 'many files from one place to another',
      usage: 'mv <file1> <file2> ... <filen> <destination>'
    }
  ],

  navigate: [
    {
      value: 'nav-dir',
      label: 'to a specific directory',
      usage: 'cd <dir_path>'
    },
    {
      value: 'nav-parent',
      label: 'to the parent directory',
      usage: 'cd ../'
    },
    {
      value: 'nav-home',
      label: 'to the home directory',
      usage: 'cd ~'
    }
  ],

  remove: [
    {
      value: 'rm-file',
      label: 'a single file',
      usage: 'rm <filename>'
    },
    {
      value: 'rm-files',
      label: 'multiple files',
      usage: 'rm <file1> <file2>'
    },
    {
      value: 'rm-dir',
      label: 'an empty directory',
      usage: 'rmdir <directory-name>'
    },
    {
      value: 'rm-file-dir',
      label: 'non-empty directories and all file within them',
      usage: 'rm -r <dirname>'
    }
  ],

  sort: [
    {
      value: 'sort',
      label: 'contents of a file',
      usage: 'sort <file name>',
      nb:
        'This command does not actually change the input file'
    },
    {
      value: 'sort-new',
      label: 'and write the output to a new file',
      usage:
        'sort -o <output-file> <input-file>'
    }
  ],

  view: [
    {
      value: 'view',
      label: 'contents of a file',
      usage:
        'cat <file-name>',
    }
  ],


};
