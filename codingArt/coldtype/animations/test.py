from coldtype import *

fnt = Font.Cacheable("~/Library/Fonts/RobotoFlex[GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght].ttf")

@animation(rect=Rect(1080, 1080), timeline=60, bg=hsl(0.3))
def tutorial(f):
    return (StSt("Funk\nN\nSpuds", fnt,
                 f.e("eeio", 1, rng=(300, 200)),
                 slnt=0,
                 wght=f.e("seio", 2),
                 wdth=f.e("qeio", 1),
                 #GRAD=f.e("eeio", 2)
                 )
                 .align(f.a.r) #f stands for frame, f.i is the frame number, f.a.r is rectangle of animation
                 .fill(1) #fill color/none, .s() stroke and .sw() stroke width example .fill(1).s(0).sw(1)
                 )
