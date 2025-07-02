def TOH(n, src, dest, aux):
    if n == 1:
        print(f"{src} ==> {dest}")
    else:
        TOH(n-1, src, aux, dest)
        print(f"{src} ==> {dest}")
        TOH(n-1, aux, dest, src)

TOH(5, "SRC", "DEST", "AUX")
