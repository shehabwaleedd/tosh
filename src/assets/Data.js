import toshibaLogo from './toshiba.png'
import zanusiLogo from "./zanusi.png"
import samsungLogo from "./samsung.png"
import lgLogo from "./lg.png"
import kirazyLogo from "./kirazi.webp"
import toshibaWashing from "./toshiba/toshiba_1.webp"
import toshibaHardWare from "./toshiba/toshiba_2.webp"
import zanusiWashing from "./zanusi_1.webp"
import zanusiHardWare from "./zanusi_2.webp"
import samsungWashing from "./samsung/samsung_1.webp"
import samsungHardWare from "./samsung/samsung_2.webp"
import lgWashing from "./lg/lg_1.webp"
import lgHardWare from "./lg/lg_2.webp"
import kirazyWashing from "./kirazy/kirazy_fridge.webp"
import kirazyHardWare from "./kirazy/kirazy_hardware.webp"
import sharpLogo from "./sharp.webp"
import sharpWashing from "./sharp/sharp_1.webp"
import sharpHardWare from "./sharp/sharp_2.webp"
import electrostarLogo from "./electrostar/electrostar_logo.webp"
import electrostarWashing from "./electrostar/electrostar_1.webp"
import electrostarHardWare from "./electrostar/electrostar_2.webp"
import bekoLogo from "./beko/beko_logo.png"
import bekoWashing from "./beko/beko_1.webp"
import bekoHardWare from "./beko/beko_2.webp"
import aristonLogo from "./ariston/ariston_logo.png"
import aristonWashing from "./ariston/ariston_1.jpeg"
import aristonHardWare from "./ariston/ariston_2.jpeg"
import indesitLogo from "./indesit/indesit_logo.png"
import indesitWashing from "./indesit/indesit_1.webp"
import indesitHardWare from "./indesit/indesit_2.webp"
import whirlpoolLogo from "./whirlpool/whirlpool_logo.png"
import whirlpoolWashing from "./whirlpool/whirlpool_1.webp"
import whirlpoolHardWare from "./whirlpool/whirlpool_2.webp"
import hitachiLogo from "./hitachi/hitachi_logo.webp"
import hitachiWashing from "./hitachi/hitachi_1.webp"
import hitachiHardWare from "./hitachi/hitachi_2.webp"
import whitewhaleLogo from "./whitewhale/whitewhale_logo.webp"
import whitewhaleWashing from "./whitewhale/whitewhale_1.webp"
import whitewhaleHardWare from "./whitewhale/whitewhale_2.webp"
import goldiLogo from "./goldi/goldi_logo.png"
import goldiWashing from "./goldi/goldi_1.webp"
import goldiHardWare from "./goldi/goldi_2.webp"
import whitepointLogo from "./whitepoint/whitepoint_logo.webp"
import whitepointWashing from "./whitepoint/whitepoint_1.webp"
import whitepointHardWare from "./whitepoint/whitepoint_2.webp"







const Data = [
    {
        id: 1,
        name: "توشيبا",
        logo: toshibaLogo,
        washing: toshibaWashing,
        hardware: toshibaHardWare,
        main_text: "صيانة أجهزة توشيبا",
        main_h1: "أتصل الأن على رقم صيانة توشيبا لا داعي للذهاب إلى مراكز الصيانة الغير معتمده نوفر قطع الغيار الأصلية يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم",
        washing_h1: "مركز خدمة العملاء",
        washing_p: "كما يوجد قسم خاص لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاص بالشركة خدمة الصيانة24 ساعه .7 أيام فى الأسبوع",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة جولدي",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجتكم على مدار اليوم لسرعة تفادي الأعطال المفاجأة",
        customerService: "مركز خدمة عملاء سامسونج",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة توشيبا يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 2,
        name: "زانوسي",
        logo: zanusiLogo,
        washing: zanusiWashing,
        hardware: zanusiHardWare,
        main_text: "صيانة أجهزة زانوسي ",
        main_h1: "أتصل الأن على رقم صيانة زانوسي لا داعي للذهاب إلى مراكز الصيانة الغير معتمده نوفر قطع الغيار الأصلية يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم",
        washing_h1: "مركز خدمة العملاء",
        washing_p: "كما يوجد قسم خاص لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاص بالشركة خدمة الصيانة24 ساعه .7 أيام فى الأسبوع",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة زانوسي",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجتكم على مدار اليوم لسرعة تفادي الأعطال المفاجأة",
        customerService: "مركز خدمة عملاء زانوسي",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة زانوسي يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 3,
        name: "سامسونج",
        logo: samsungLogo,
        washing: samsungWashing,
        hardware: samsungHardWare,
        main_text: "صيانة أجهزة سامسونج",
        main_h1: "أتصل الأن على رقم صيانة سامسونج لا داعي للذهاب إلى مراكز الصيانة الغير معتمده نوفر قطع الغيار الأصلية يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم",
        washing_h1: "مركز خدمة العملاء",
        washing_p: "كما يوجد قسم خاص لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاص بالشركة خدمة الصيانة24 ساعه .7 أيام فى الأسبوع",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة سامسونج",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجتكم على مدار اليوم لسرعة تفادي الأعطال المفاجأة",
        customerService: "مركز خدمة عملاء سامسونج",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة سامسونج يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 4,
        name: "ال جي",
        logo: lgLogo,
        washing: lgWashing,
        hardware: lgHardWare,
        main_text: "صيانة أجهزة ال جي",
        main_h1: "أتصل الأن على رقم صيانة ال جي لا داعي للذهاب إلى مراكز الصيانة الغير معتمده نوفر قطع الغيار الأصلية يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم",
        washing_h1: "مركز خدمة العملاء",
        washing_p: "كما يوجد قسم خاص لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاص بالشركة خدمة الصيانة24 ساعه .7 أيام فى الأسبوع",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة ال جي",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجتكم على مدار اليوم لسرعة تفادي الأعطال المفاجأة",
        customerService: "مركز خدمة عملاء ال جي",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة ال جي يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },

    {
        id: 5,
        name: "كيرازي",
        logo: kirazyLogo,
        washing: kirazyWashing,
        hardware: kirazyHardWare,
        main_text: "صيانة أجهزة كيرازي",
        main_h1: "أتصل الأن على رقم صيانة كيرازي لا داعي للذهاب إلى مراكز الصيانة الغير معتمده نوفر قطع الغيار الأصلية يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم",
        washing_h1: "مركز خدمة العملاء",
        washing_p: "كما يوجد قسم خاص لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاص بالشركة خدمة الصيانة24 ساعه .7 أيام فى الأسبوع",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة كيرازي",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجتكم على مدار اليوم لسرعة تفادي الأعطال المفاجأة",
        customerService: "مركز خدمة عملاء كيرازي",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة كيرازي يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 6,
        name: "شارب",
        logo: sharpLogo,
        washing: sharpWashing,
        hardware: sharpHardWare,
        main_text: "صيانة أجهزة شارب",
        main_h1: "أتصل الأن على رقم صيانة شارب لا داعي للذهاب إلى مراكز الصيانة الغير معتمده نوفر قطع الغيار الأصلية يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم",
        washing_h1: "مركز خدمة العملاء",
        washing_p: "كما يوجد قسم خاص لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاص بالشركة خدمة الصيانة24 ساعه .7 أيام فى الأسبوع",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة شارب",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجتكم على مدار اليوم لسرعة تفادي الأعطال المفاجأة",
        customerService: "مركز خدمة عملاء شارب",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة شارب يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"

    },
    {
        id: 7,
        name: "الكتروستار",
        logo: electrostarLogo,
        washing: electrostarWashing,
        hardware: electrostarHardWare,
        main_text: "صيانة أجهزة الكتروستار",
        main_h1: "أتصل الأن على رقم صيانة الكتروستار لا داعي للذهاب إلى مراكز الصيانة الغير معتمده نوفر قطع الغيار الأصلية يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم",
        washing_h1: "مركز خدمة العملاء",
        washing_p: "كما يوجد قسم خاص لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاص بالشركة خدمة الصيانة24 ساعه .7 أيام فى الأسبوع",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة الكتروستار",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجتكم على مدار اليوم لسرعة تفادي الأعطال المفاجأة",
        customerService: "مركز خدمة عملاء الكتروستار",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة الكتروستار يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 8,
        name: "بيكو",
        logo: bekoLogo,
        washing: bekoWashing,
        hardware: bekoHardWare,
        main_h1: "أتصل الأن على رقم صيانة بيكو لا داعي للذهاب إلى مراكز الصيانة الغير معتمده نوفر قطع الغيار الأصلية يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم",
        washing_h1: "مركز خدمة العملاء",
        washing_p: "كما يوجد قسم خاص لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاص بالشركة خدمة الصيانة 24 ساعه .7 أيام فى الأسبوع",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة بيكو",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجاتكم على مدار اليوم لسرعة تفادي الأعطال المفاجأة",
        customerService: "مركز خدمة عملاء بيكو",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة بيكو يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 9,
        name: "اريستون",
        logo: aristonLogo,
        washing: aristonWashing,
        hardware: aristonHardWare,
        main_text: "صيانة أجهزة اريستون",
        main_h1: "أتصل الأن على رقم صيانة اريستون لا داعي للذهاب إلى مراكز الصيانة الغير معتمده نوفر قطع الغيار الأصلية  يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم  ",
        washing_h1: "مركز خدمة العملاء",
        washing_p: "كما يوجد قسم خاص  لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاصة بالشركة خدمة الصيانة 24 ساعه .7 أيام فى الأسبوع ",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة اريستون ",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجاتكم  على مدار اليوم لسرعة تفادي الأعطال المفاجأة ",
        customerService: "مركز خدمة عملاء اريستون",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة اريستون يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 10,
        name: "انديست",
        logo: indesitLogo,
        washing: indesitWashing,
        hardware: indesitHardWare,
        main_text: "صيانة أجهزة انديست",
        main_h1: "أتصل الأن على رقم صيانة انديست لا داعي للذهاب إلى مراكز الصيانة الغير معتمده  نوفر قطع الغيار الأصلية  يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم  ",
        washing_h1: "مركز خدمة العملاء ",
        washing_p: "كما يوجد قسم خاص  لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاصة بالشركة خدمة الصيانة 24 ساعه .7 أيام فى الأسبوع ",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة انديست ",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجاتكم  على مدار اليوم لسرعة تفادي الأعطال المفاجأة ",
        customerService: "مركز خدمة عملاء انديست",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة انديست يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 11,
        name: "ويرلبول",
        logo: whirlpoolLogo,
        washing: whirlpoolWashing,
        hardware: whirlpoolHardWare,
        main_text: "صيانة أجهزة ويرلبول",
        main_h1: "أتصل الأن على رقم صيانة ويرلبول لا داعي للذهاب إلى مراكز الصيانة الغير معتمده  نوفر قطع الغيار الأصلية  يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم  ",
        washing_h1: "مركز خدمة العملاء ",
        washing_p: "كما يوجد قسم خاص  لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاصة بالشركة خدمة الصيانة 24 ساعه .7 أيام فى الأسبوع ",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة ويرلبول ",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجاتكم  على مدار اليوم لسرعة تفادي الأعطال المفاجأة ",
        customerService: "مركز خدمة عملاء ويرلبول",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة ويرلبول يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 12,
        name: "هيتاشي",
        logo: hitachiLogo,
        washing: hitachiWashing,
        hardware: hitachiHardWare,
        main_text: "صيانة أجهزة هيتاشي",
        main_h1: "أتصل الأن على رقم صيانة هيتاشي لا داعي للذهاب إلى مراكز الصيانة الغير معتمده  نوفر قطع الغيار الأصلية  يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم  ",
        washing_h1: "مركز خدمة العملاء ",
        washing_p: "كما يوجد قسم خاص  لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاصة بالشركة خدمة الصيانة 24 ساعه .7 أيام فى الأسبوع ",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة هيتاشي ",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجاتكم  على مدار اليوم لسرعة تفادي الأعطال المفاجأة ",
        customerService: "مركز خدمة عملاء هيتاشي",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة هيتاشي يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 13,
        name: "وايت ويل",
        logo: whitewhaleLogo,
        washing: whitewhaleWashing,
        hardware: whitewhaleHardWare,
        main_text: "صيانة أجهزة وايت ويل",
        main_h1: "أتصل الأن على رقم صيانة وايت ويل لا داعي للذهاب إلى مراكز الصيانة الغير معتمده  نوفر قطع الغيار الأصلية  يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم  ",
        washing_h1: "مركز خدمة العملاء ",
        washing_p: "كما يوجد قسم خاص  لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاصة بالشركة خدمة الصيانة 24 ساعه .7 أيام فى الأسبوع ",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة وايت ويل ",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجاتكم  على مدار اليوم لسرعة تفادي الأعطال المفاجأة ",
        customerService: "مركز خدمة عملاء وايت ويل",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة وايت ويل يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"

    },
    {
        id: 14,
        name: "جولدي",
        logo: goldiLogo,
        washing: goldiWashing,
        hardware: goldiHardWare,
        main_text: "صيانة أجهزة جولدي",
        main_h1: "أتصل الأن على رقم صيانة جولدي لا داعي للذهاب إلى مراكز الصيانة الغير معتمده  نوفر قطع الغيار الأصلية  يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم  ",
        washing_h1: "مركز خدمة العملاء ",
        washing_p: "كما يوجد قسم خاص  لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاصة بالشركة خدمة الصيانة 24 ساعه .7 أيام فى الأسبوع ",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة جولدي ",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجاتكم  على مدار اليوم لسرعة تفادي الأعطال المفاجأة ",
        customerService: "مركز خدمة عملاء جولدي",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة اجهزة جولدي يقوم المركز بصيانة جميع الموديلات وتقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة"
    },
    {
        id: 15,
        name: "وايت بوينت",
        logo: whitepointLogo,
        washing: whitepointWashing,
        hardware: whitepointHardWare,
        main_text: "صيانة أجهزة وايت بوينت",
        main_h1: "أتصل الأن على رقم صيانة وايت بوينت لا داعي للذهاب إلى مراكز الصيانة الغير معتمده  نوفر قطع الغيار الأصلية  يمكنكم الأتصال في أي وقت نحن في خدمتكم طوال 24 ساعة في إستقبال إتصالاتكم  ",
        washing_h1: "مركز خدمة العملاء ",
        washing_p: "كما يوجد قسم خاص  لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاصة بالشركة خدمة الصيانة 24 ساعه .7 أيام فى الأسبوع ",
        hardware_h1: "يقدم المركز خدمة الصيانة لجميع أجهزة وايت بوينت ",
        hardwware_p: "لدينا سرب من السيارات المجهزة لتلبية إحتياجاتكم  على مدار اليوم لسرعة تفادي الأعطال المفاجأة ",
        customerService: "مركز خدمة عملاء وايت بوينت",
        who_are_we: " مركز خدمة وصيانة معتمد لصيانة  اجهزة وايت بوينت  يقوم المركز بصيانة جميع الموديلات  وتقوم بتوفير جميع قطع الغيار الأصلية  وضمان على الصيانة"
    }
]

export default Data