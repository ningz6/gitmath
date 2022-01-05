# https://github.com/goessner/mdmath
# https://github.com/goessner/markdown-it-texmath/blob/master/texmath.js
# https://docs.gitlab.com/ee/user/markdown.html#math

import argparse
import re

parser = argparse.ArgumentParser()
parser.add_argument(
    "--gitlab", action="store_true", help="use Gitlab math delimiters"
)
parser.add_argument("file", type=str, help="input markdown filename")
parser.add_argument("out", type=str, help="output markdown filename")
args = parser.parse_args()

DOLLARS_MATH_INLINE_RE = re.compile(r"(\$((?:[^\s\\])|(?:\S.*?[^\s\\]))\$)")
DOLLARS_MATH_BLOCK_RE = re.compile(r"(\${2}([^$]*?[^\\])\${2})")

GITLAB_MATH_INLINE_RE = re.compile(r"(\$`(.+?)`\$)")
GITLAB_MATH_BLOCK_RE = re.compile(r"(`{3}math\s*([^`]*?)\s*`{3})")


def dollars_to_gitlab(s):
    def repl_inline(match):
        content = match.group(2).strip()
        return "$`{}`$".format(content)

    def repl_block(match):
        content = match.group(2).strip()
        return "```math\n{}\n```".format(content)

    return DOLLARS_MATH_BLOCK_RE.sub(
        repl_block, DOLLARS_MATH_INLINE_RE.sub(repl_inline, s)
    )


def gitlab_to_dollars(s):
    def repl_inline(match):
        content = match.group(2).strip()
        return "${}$".format(content)

    def repl_block(match):
        content = match.group(2).strip()
        return "$$\n{}\n$$".format(content)

    return GITLAB_MATH_BLOCK_RE.sub(
        repl_block, GITLAB_MATH_INLINE_RE.sub(repl_inline, s)
    )


if __name__ == "__main__":
    M = gitlab_to_dollars if args.gitlab else dollars_to_gitlab

    with open(args.file) as f:
        s = f.read()

    with open(args.out, "w") as f:
        f.write(M(s))
