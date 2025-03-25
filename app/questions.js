const questions = [
  {
    number: 1000,
    question: 'من هو أول من أسلم من الرجال؟',
    answer: 'سيدنا أبو بكر الصديق رضي الله عنه.',
  },
  {
    number: 2,
    question: 'من هي أول من أسلمت من النساء؟',
    answer: 'السيدة خديجة بنت خويلد زوجة النبي رضي الله عنها.',
  },
  {
    number: 3,
    question: 'ما اسم أول ولد للنبي صلى الله عليه وسلم؟',
    answer: 'القاسم.',
  },
  {
    number: 4,
    question: 'من النبي الذي يفر من زوجته يوم القيامة؟',
    answer: 'سيدنا لوط عليه السلام.',
  },
  {
    number: 5,
    question: 'ما اسم الصحابية التي قتلت سبعة من الروم؟',
    answer: 'أم حكيم المخزومية رضي الله عنها.',
  },
  {
    number: 6,
    question: 'من مؤلف سلسلة ماوراء الطبيعة؟',
    answer: 'الدكتور أحمد خالد توفيق.',
  },
  {
    number: 7,
    question: 'من صاحب كتاب الأغاني؟',
    answer: 'أبو الفرج الأصفهاني.',
  },
  {
    number: 8,
    question: 'من أول مولود في الإسلام بعد الهجرة؟',
    answer: 'سيدنا عبد الله بن الزبير رضي الله عنه.',
  },
  {
    number: 9,
    question: 'من هو سيد ولد آدم؟',
    answer: 'سيدنا محمد صلى الله عليه وسلم.',
  },
  {
    number: 10,
    question: 'ما هو أفضل الأيام عند الله؟',
    answer: 'يوم عرفة.',
  },
  {
    number: 11,
    question: 'ما هي أفضل ليلة عند الله؟',
    answer: 'ليلة القدر.',
  },
  {
    number: 12,
    question: 'من هو رهين المحبسين؟',
    answer: 'أبو العلاء المعري.',
  },
  {
    number: 13,
    question: 'من هي ثاني امرأة دخلت الإسلام؟',
    answer: 'أم الفضل زوجة العباس رضي الله عنهما.',
  },
  {
    number: 14,
    question: 'من هم المغضوب عليهم في سورة الفاتحة؟',
    answer: 'اليهود لأنهم عرفوا الحق وأنكروه.',
  },
  {
    number: 15,
    question: 'من هم الضالين في سورة الفاتحة؟',
    answer: 'النصارى لأنهم حادوا عن طريق الحق.',
  },
  {
    number: 16,
    question: 'ما هو اسم أبو لهب؟',
    answer: 'عبد العزى.',
  },
  {
    number: 17,
    question: 'ما صلة القرابة بين أبو لهب والنبي؟',
    answer: 'عم النبي (أخو أبيه).',
  },
  {
    number: 18,
    question: 'ما هي السورة التي استمع لها الجن وقالوا سمعناً قرآناً عجبا؟',
    answer: 'سورة العلق.',
  },
  {
    number: 19,
    question: 'من هو الخليفة الخامس بعد علي بن أبي طالب؟',
    answer: 'الحسن بن علي رضي الله عنهما.',
  },
  {
    number: 20,
    question: 'من هي الممتحنة التي سُميت نزلت فيها سورة الممتحنة؟',
    answer: 'أسماء بنت عقبة بن أبي مُعيط.',
  },
  {
    number: 21,
    question: 'من الصحابي الملقب بـ"أسد الله الغالب"؟',
    answer: 'علي بن أبي طالب رضي الله عنه.',
  },
  {
    number: 22,
    question: 'من هو الصحابي الملقب بحَبْر الأمة وترجمان القرآن؟',
    answer: 'عبدالله بن العباس رضي الله عنهما.',
  },
  {
    number: 23,
    question: 'ما هي سورة براءة؟',
    answer: 'سورة التوبة.',
  },
  {
    number: 24,
    question: 'في أي يوم خلق الله آدم عليه السلام؟',
    answer: 'يوم الجمعة.',
  },
  {
    number: 25,
    question: 'من الصحابي الذي لم يُهزم أبداً في حياته؟',
    answer: 'خالد بن الوليد رضي الله عنه.',
  },
  {
    number: 26,
    question: 'من المدفونين بجوار النبي؟',
    answer: 'أبو بكر الصديق وعمر بن الخطاب رضي الله عنهما.',
  },
  {
    number: 27,
    question: 'من الذي قتل سيدنا عمر بن الخطاب؟',
    answer: 'أبو لؤلؤة المجوسي.',
  },
  {
    number: 28,
    question: 'من الصحابي الذي يلقب بالشهيد الطيار؟',
    answer: 'جعفر بن أبي طالب رضي الله عنه.',
  },
  {
    number: 29,
    question: 'ما هو اسم الإمام البخاري؟',
    answer: 'محمد بن إسماعيل البخاري.',
  },
  {
    number: 30,
    question: 'من صاحب رواية البؤساء؟',
    answer: 'فيكتور هيجو.',
  },
  {
    number: 31,
    question: 'من الصحابي الذي اهتز لموته عرش الرحمن؟',
    answer: 'سعد بن معاذ رضي الله عنه.',
  },
  {
    number: 32,
    question: 'من هو صاحب لقب سيف الله المسلول؟',
    answer: 'خالد بن الوليد رضي الله عنه.',
  },
  {
    number: 33,
    question: 'من هو إمام دار الهجرة؟',
    answer: 'الإمام مالك بن أنس.',
  },
  {
    number: 34,
    question: 'من هي التي طلقها النبي وأمره الله أن يرجعها؟',
    answer: 'حفصة بنت عمر بن الخطاب رضي الله عنها.',
  },
  {
    number: 35,
    question: 'من هو النبي الذي دُفن بعد النبي محمد؟',
    answer: 'النبي دانيال عليه السلام.',
  },
  {
    number: 36,
    question: 'من الصحابي الذي تستحي منه الملائكة؟',
    answer: 'عثمان بن عفان رضي الله عنه.',
  },
  {
    number: 37,
    question: 'من الذي سيقتل المسيح الدجال؟',
    answer: 'المسيح عيسى بن مريم عليه السلام.',
  },
  {
    number: 38,
    question: 'أين رست سفينة نوح عليه السلام؟',
    answer: 'على جبل الجودي.',
  },
  {
    number: 39,
    question: 'ما اسم الحيوان الذي ركبه النبي في رحلة الإسراء والمعراج؟',
    answer: 'البراق.',
  },
  {
    number: 40,
    question: 'كم مرة ذكرت مصر في القرآن الكريم؟',
    answer: 'خمس مرات.',
  },
  {
    number: 41,
    question: 'في عهد من تم جمع القرآن الكريم؟',
    answer: 'عثمان بن عفان رضي الله عنه.',
  },
  {
    number: 42,
    question: 'من الصحابي الذي تجسد في صورته سيدنا جبريل؟',
    answer: 'دحية الكلبي رضي الله عنه.',
  },
  {
    number: 43,
    question: 'من الحكيم الجاهلي الذي وحد الله تعالى في عصره؟',
    answer: 'قس بن ساعدة الإيادي.',
  },
  {
    number: 44,
    question: 'من هو شاعر الرسول؟',
    answer: 'حسان بن ثابت رضي الله عنه.',
  },
  {
    number: 45,
    question: 'من هو رأس الكفر؟',
    answer: 'أمية بن خلف.',
  },
  {
    number: 46,
    question: 'من الصحابي الملقب بالراكب المهاجر؟',
    answer: 'عكرمة بن أبي جهل رضي الله عنه.',
  },
  {
    number: 47,
    question: 'من هو شيخ المرسلين؟',
    answer: 'نوح عليه السلام.',
  },
  {
    number: 48,
    question: 'من أول من خط بالقلم وخاط ثيابه؟',
    answer: 'إدريس عليه السلام.',
  },
  {
    number: 49,
    question: 'من أول من ركب الخيل؟',
    answer: 'إسماعيل عليه السلام.',
  },
  {
    number: 50,
    question: 'ما هي أطول كلمة في القرآن الكريم؟',
    answer: 'فَسَيَكْفِيكَهُمُ.',
  },
  {
    number: 51,
    question: 'من هو آخر السلاطين العثمانيين؟',
    answer: 'السلطان عبد الحميد الثاني.',
  },
  {
    number: 52,
    question: 'ما هي أول مملكة عربية تنال استقلالها؟',
    answer: 'الأردن.',
  },
  {
    number: 53,
    question: 'ما هي الدولة العربية الوحيدة التي لم تدخل تحت الحكم العثماني؟',
    answer: 'المغرب.',
  },
  {
    number: 54,
    question: 'ما هي أكبر دولة عربية من حيث السكان؟',
    answer: 'مصر.',
  },
  {
    number: 55,
    question: 'متى بدأت الحرب العالمية الأولى؟',
    answer: 'سنة 1914م.',
  },
  {
    number: 56,
    question: 'أين تقع مدينة لندن غير التي في بريطانيا؟',
    answer: 'كندا.',
  },
  {
    number: 57,
    question: 'ما اسم رئيس أمريكا الذي أمر بإلقاء القنبلة الذرية؟',
    answer: 'هاري ترومان.',
  },
  {
    number: 58,
    question: 'ما اللغة التي تكلم بها آدم عليه السلام؟',
    answer: 'اللغة العربية.',
  },
  {
    number: 59,
    question: 'متى سقطت دولة المسلمين في الأندلس؟',
    answer: 'سنة 1492م.',
  },
  {
    number: 60,
    question: 'من الذي وحد جيوش المسلمين وقام بهزيمة التتار؟',
    answer: 'سيف الدين قطز.',
  },
  {
    number: 61,
    question: 'من هو أول رئيس وزراء مصري؟',
    answer: 'علي لطفي باشا.',
  },
  {
    number: 62,
    question: 'من هو أول رئيس مصري؟',
    answer: 'اللواء محمد نجيب.',
  },
  {
    number: 63,
    question: 'كم عدد أولي العزم من الرسل؟',
    answer: '5 رسل.',
  },
  {
    number: 64,
    question: 'من العالم مكتشف مصل شلل الأطفال؟',
    answer: 'سابين.',
  },
  {
    number: 65,
    question: 'من الذي قتل عنترة بن شداد؟',
    answer: 'الليث الرهيص.',
  },
  {
    number: 66,
    question: 'متى تم بناء الجامع الأزهر في مصر؟',
    answer: 'سنة 970م.',
  },
  {
    number: 67,
    question: 'من هو مجنون ليلى؟',
    answer: 'قيس بن الملوح.',
  },
  {
    number: 68,
    question: 'من هو أديب الفلاسفة وفيلسوف الأدباء؟',
    answer: 'أبو حيان التوحيدي.',
  },
  {
    number: 69,
    question: 'من هي المرأة التي زوجها نبي وأبوها نبي وأخوها نبي وابنها نبي؟',
    answer: 'إليا بنت يعقوب.',
  },
  {
    number: 70,
    question: 'من المُلقب بذي النورين؟',
    answer: 'عثمان بن عفان رضي الله عنه.',
  },
  {
    number: 71,
    question: 'ما هو العصر الذهبي للأدب العربي؟',
    answer: 'العصر العباسي.',
  },
  {
    number: 72,
    question: 'من هو الشاعر الملقب بذي القروح؟',
    answer: 'امرؤ القيس.',
  },
  {
    number: 73,
    question: 'ما أكبر شبه جزيرة في العالم؟',
    answer: 'شبه الجزيرة العربية.',
  },
  {
    number: 74,
    question: 'ما هو أطول نهر في العالم؟',
    answer: 'نهر النيل.',
  },
  {
    number: 75,
    question: 'ما هو أعرض نهر في العالم؟',
    answer: 'نهر الأمازون.',
  },
  {
    number: 76,
    question: 'من مؤلف كتاب البخلاء؟',
    answer: 'الجاحظ.',
  },
  {
    number: 77,
    question: 'كم عدد الدول العربية في قارة آسيا؟',
    answer: '12 دولة.',
  },
  {
    number: 78,
    question: 'ما هو أقرب نجم من الأرض؟',
    answer: 'الشمس.',
  },
  {
    number: 79,
    question: 'ما هو أكبر خليج في العالم؟',
    answer: 'خليج المكسيك.',
  },
  {
    number: 80,
    question: 'من مخترع الآلة الحاسبة؟',
    answer: 'باسكال.',
  },
  {
    number: 81,
    question: 'ما المادة الأساسية في تركيب الزجاج؟',
    answer: 'الرمل.',
  },
  {
    number: 82,
    question: 'ما أعلى جبل في الوطن العربي؟',
    answer: 'جبل طوبقال في المغرب.',
  },
  {
    number: 83,
    question: 'ما هي أول دول العالم في إنتاج اللؤلؤ؟',
    answer: 'اليابان.',
  },
  {
    number: 84,
    question: 'أين دُفن رأس الحسين بن علي بن أبي طالب؟',
    answer: 'في البقيع بالمدينة المنورة.',
  },
  {
    number: 85,
    question: 'من الذي قتل حمزة بن عبد المطلب؟',
    answer: 'وحشي بن حرب.',
  },
  {
    number: 86,
    question: 'من أشهر ملوك الهند المسلمين؟',
    answer: 'الملك أكبر.',
  },
  {
    number: 87,
    question: 'كم عدد الدول التي تطل على البحر الأسود؟',
    answer: '4 دول.',
  },
  {
    number: 88,
    question: 'ما جنسية العالم جاليليو؟',
    answer: 'إيطالي.',
  },
  {
    number: 89,
    question: 'ما الحيوان الذي له أعلى ضغط دم؟',
    answer: 'الزرافة.',
  },
  {
    number: 90,
    question: 'كم عدد دول قارة أوروبا؟',
    answer: '34 دولة.',
  },
  {
    number: 91,
    question: 'كم عدد السور المكية في القرآن الكريم؟',
    answer: '93 سورة.',
  },
  {
    number: 92,
    question: 'متى تم عقد صلح الحديبية بين المسلمين وقريش؟',
    answer: 'سنة 6 هجرية.',
  },
  {
    number: 93,
    question: 'أين يقع قصر الملكة بلقيس؟',
    answer: 'مأرب.',
  },
  {
    number: 94,
    question: 'من أول دولة حصلت على كأس العالم لكرة القدم؟',
    answer: 'الأوروغواي.',
  },
  {
    number: 95,
    question: 'ما الدولة التي استخدمت أول دبابة في العالم؟',
    answer: 'بريطانيا.',
  },
  {
    number: 96,
    question: 'من هو عميد الأدب العربي؟',
    answer: 'طه حسين.',
  },
  {
    number: 97,
    question: 'ما هي أصغر دولة أوروبية؟',
    answer: 'سويسرا.',
  },
  {
    number: 98,
    question: 'ما الدولة العربية التي تقع في المحيط الهندي؟',
    answer: 'جزر القمر.',
  },
  {
    number: 99,
    question: 'ما طول الأمعاء الدقيقة؟',
    answer: '6 متر.',
  },
  {
    number: 100,
    question: 'من القائد المسلم الذي فتح بلاد السند؟',
    answer: 'محمد بن القاسم الثقفي.',
  },
  {
    number: 101,
    question: 'ما هي عاصمة فرنسا؟',
    answer: 'باريس',
  },
  {
    number: 102,
    question: 'ما هو أطول نهر في العالم؟',
    answer: 'نهر النيل',
  },
  {
    number: 103,
    question: 'من هو مؤلف كتاب "الأمير"؟',
    answer: 'نيكولو مكيافيلي',
  },
  {
    number: 104,
    question: 'ما هي أكبر دولة في العالم من حيث المساحة؟',
    answer: 'روسيا',
  },
  {
    number: 105,
    question: 'ما هي العملة الرسمية لليابان؟',
    answer: 'الين الياباني',
  },
  {
    number: 106,
    question: 'من هو أول رائد فضاء هبط على سطح القمر؟',
    answer: 'نيل أرمسترونغ',
  },
  {
    number: 107,
    question: 'ما هي اللغة الرسمية للبرازيل؟',
    answer: 'البرتغالية',
  },
  {
    number: 108,
    question: 'ما هو اسم أصغر كوكب في المجموعة الشمسية؟',
    answer: 'عطارد',
  },
  {
    number: 109,
    question: 'من هو الفنان الذي رسم لوحة "الموناليزا"؟',
    answer: 'ليوناردو دافنشي',
  },
  {
    number: 110,
    question: 'ما هي أقدم جامعة في العالم؟',
    answer: 'جامعة القرويين',
  },
  {
    number: 111,
    question: 'ما هو اسم أطول جبل في العالم؟',
    answer: 'جبل إيفرست',
  },
  {
    number: 112,
    question: 'ما هي عاصمة أستراليا؟',
    answer: 'كانبرا',
  },
  {
    number: 113,
    question: 'من هو مخترع المصباح الكهربائي؟',
    answer: 'توماس إديسون',
  },
  {
    number: 114,
    question: 'ما هو أكبر محيط في العالم؟',
    answer: 'المحيط الهادئ',
  },
  {
    number: 115,
    question: 'ما هي اللغة الرسمية للصين؟',
    answer: 'الماندرين',
  },
  {
    number: 116,
    question: 'من هو مؤلف مسرحية "روميو وجولييت"؟',
    answer: 'ويليام شكسبير',
  },
  {
    number: 117,
    question: 'ما هي عاصمة كندا؟',
    answer: 'أوتاوا',
  },
  {
    number: 118,
    question: 'ما هو اسم أقدم دين في العالم؟',
    answer: 'الهندوسية',
  },
  {
    number: 119,
    question: 'من هو أول رئيس للولايات المتحدة الأمريكية؟',
    answer: 'جورج واشنطن',
  },
  {
    number: 120,
    question: 'ما هي العملة الرسمية للمملكة المتحدة؟',
    answer: 'الجنيه الإسترليني',
  },
  {
    number: 121,
    question: 'ما هي الدولة التي يقع فيها برج بيزا المائل؟',
    answer: 'إيطاليا',
  },
  {
    number: 122,
    question: 'ما هو الحيوان الذي يلقب بسفينة الصحراء؟',
    answer: 'الجمل',
  },
  {
    number: 123,
    question: 'كم عدد قارات العالم؟',
    answer: 'سبع',
  },
  {
    number: 124,
    question: 'من هو مخترع الإنترنت؟',
    answer: 'تيم بيرنرز لي',
  },
  {
    number: 125,
    question: 'ما هو الغاز الذي نتنفسه للبقاء على قيد الحياة؟',
    answer: 'الأكسجين',
  },
  {
    number: 126,
    question: 'ما هي أكبر قارة في العالم؟',
    answer: 'آسيا',
  },
  {
    number: 127,
    question: 'ما هو المعدن الذي يرمز له بالرمز Au؟',
    answer: 'الذهب',
  },
  {
    number: 128,
    question: 'كم عدد الكواكب في المجموعة الشمسية؟',
    answer: 'ثمانية',
  },
  {
    number: 129,
    question: 'ما هي عاصمة تركيا؟',
    answer: 'أنقرة',
  },
  {
    number: 130,
    question: 'من هو العالم الذي اكتشف قانون الجاذبية؟',
    answer: 'إسحاق نيوتن',
  },
  {
    number: 131,
    question: 'ما هو الحيوان المعروف بملك الغابة؟',
    answer: 'الأسد',
  },
  {
    number: 132,
    question: 'ما هي أكبر صحراء في العالم؟',
    answer: 'الصحراء الكبرى',
  },
  {
    number: 133,
    question: 'من هو مخترع الهاتف؟',
    answer: 'ألكسندر جراهام بيل',
  },
  {
    number: 134,
    question: 'ما هي العملة الرسمية للولايات المتحدة الأمريكية؟',
    answer: 'الدولار الأمريكي',
  },
  {
    number: 135,
    question: 'ما هو الكوكب المعروف بالكوكب الأحمر؟',
    answer: 'المريخ',
  },
  {
    number: 136,
    question: 'ما هي أكبر جزيرة في العالم؟',
    answer: 'غرينلاند',
  },
  {
    number: 137,
    question: 'من هو مؤلف رواية "مئة عام من العزلة"؟',
    answer: 'غابرييل غارسيا ماركيز',
  },
  {
    number: 138,
    question: 'ما هي عاصمة إسبانيا؟',
    answer: 'مدريد',
  },
  {
    number: 139,
    question: 'ما هو الحيوان الذي يُستخرج منه المسك؟',
    answer: 'الغزال',
  },
  {
    number: 140,
    question: 'ما هي اللغة الرسمية في الأرجنتين؟',
    answer: 'الإسبانية',
  },
  {
    number: 141,
    question: 'من هو مخترع الطباعة؟',
    answer: 'يوهان غوتنبرغ',
  },
  {
    number: 142,
    question: 'ما هي أكبر بحيرة في العالم؟',
    answer: 'بحر قزوين',
  },
  {
    number: 143,
    question: 'ما هي عاصمة ألمانيا؟',
    answer: 'برلين',
  },
  {
    number: 144,
    question: 'ما هو العنصر الكيميائي الذي يرمز له بالرمز O؟',
    answer: 'الأكسجين',
  },
  {
    number: 145,
    question: 'من العالم الذي وضع أسس فكرة صناعة الساعات؟',
    answer: 'ابن النفيس.',
  },
  {
    number: 146,
    question: 'كم عدد أحاديث صحيح البخاري؟',
    answer: '7397 حديث.',
  },
  {
    number: 147,
    question: 'في أي عام تم تحديد خط جرينتش؟',
    answer: 'عام 1884م.',
  },
  {
    number: 148,
    question: 'من هو مخترع السيارة؟',
    answer: 'بنز.',
  },
  {
    number: 149,
    question: 'من صاحب كتاب الشفاء؟',
    answer: 'ابن سينا.',
  },
  {
    number: 150,
    question: 'من صاحب قصيدة نهج البردة؟',
    answer: 'الشاعر أحمد شوقي.',
  },
  // Ajoutez les 100 questions restantes ici...
];

export default questions;
