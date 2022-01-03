import re
import argparse

parser = argparse.ArgumentParser()
parser.add_argument(
    "-r", action="store_true", help="math block to double dollar"
)
parser.add_argument("file", type=str, help="input markdown")
parser.add_argument("out", type=str, help="output markdown")
args = parser.parse_args()


def double_dollar_2_math_block(s):
    def repl(match):
        content = match.group(2).strip()
        return "```math\n{}\n```".format(content)

    pattern = re.compile(r"(\$\$(.*?)\$\$)", re.DOTALL)
    return pattern.sub(repl, s)


def math_block_2_double_dollar(s):
    def repl(match):
        content = match.group(2).strip()
        return "$$\n{}\n$$".format(content)

    pattern = re.compile("(```math\n(.*?)```)", re.DOTALL)
    return pattern.sub(repl, s)


if __name__ == "__main__":
    M = math_block_2_double_dollar if args.r else double_dollar_2_math_block
    with open(args.file) as f:
        s = f.read()
    with open(args.out, "w") as f:
        f.write(M(s))
