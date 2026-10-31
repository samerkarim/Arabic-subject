// ====== الأسئلة ======
const quizData = [
  {
    question: 'في جملة: «شاهدتُ حديقةً أزهارُها متفتحةٌ» — ما إعراب «أزهارها متفتحة»؟',
    options: ['نعت جملة اسمية في محل نصب', 'نعت مفرد منصوب', 'نعت سببي منصوب', 'خبر ثانٍ'],
    correct: 0
  },
  {
    question: 'في جملة: «قرأتُ قصتين رائعتين» — ما إعراب «رائعتين»؟',
    options: ['نعت منصوب بالياء', 'نعت مرفوع بالضمة', 'مفعول به منصوب بالياء', 'خبر منصوب بالياء'],
    correct: 0
  },
  {
    question: '«هذا طالبٌ متميزٌ» — «متميزٌ» هنا:',
    options: ['نعت مرفوع', 'مضاف إليه مجرور', 'خبر مرفوع', 'بدل مرفوع'],
    correct: 0
  },
  {
    question: '«هذا طالبُ علمٍ» — «علمٍ» هنا:',
    options: ['مضاف إليه مجرور', 'نعت مجرور', 'خبر مجرور', 'بدل مجرور'],
    correct: 0
  },
  {
    question: '«سرتني طالبةٌ تلتزمُ بالأخلاق» — جملة «تلتزم بالأخلاق»:',
    options: ['نعت جملة فعلية في محل رفع', 'نعت جملة فعلية في محل نصب', 'خبر ثانٍ', 'حال منصوب'],
    correct: 0
  },
  {
    question: '«شاهدتُ عصفوراً بين الأغصان» — «بين الأغصان»:',
    options: ['نعت شبه جملة في محل نصب', 'نعت شبه جملة في محل رفع', 'خبر شبه جملة', 'مفعول به ثانٍ'],
    correct: 0
  },
  {
    question: '«يعجبني طالبٌ عظيمٌ خلقُه» — «عظيم»:',
    options: ['نعت سببي مرفوع', 'نعت مفرد مرفوع', 'خبر مرفوع', 'صفة مشبهة'],
    correct: 0
  },
  {
    question: 'في «يا عمرَ الفاروقُ» — «الفاروق»:',
    options: ['نعت مرفوع', 'بدل مطابق مرفوع', 'خبر مرفوع', 'عطف بيان'],
    correct: 0
  },
  {
    question: 'في «الفاروقُ عمرُ رجل عظيم» — «عمر»:',
    options: ['بدل مطابق مرفوع', 'نعت مرفوع', 'مبتدأ ثانٍ', 'خبر مرفوع'],
    correct: 0
  },
  {
    question: '«أيها المعلمون، اشرحوا بضمير» — «المعلمون»:',
    options: ['نعت مرفوع بالواو', 'نعت منصوب بالياء', 'منادى مرفوع', 'بدل مرفوع بالواو'],
    correct: 0
  },
  {
    question: '«هذه بنتٌ غيرُ خلوقةٍ» — «غير»:',
    options: ['نعت مرفوع بالضمة', 'مضاف إليه مجرور', 'خبر مرفوع', 'صفة مجرورة'],
    correct: 0
  },
  {
    question: '«الحقُّ كلُّ الحقِّ في العمل الجاد» — «كل»:',
    options: ['نعت مرفوع، و«الحق» الثانية مضاف إليه', 'توكيد معنوي مرفوع', 'بدل مرفوع', 'مبتدأ ثانٍ'],
    correct: 0
  },
  {
    question: '«يعجبني الكتابُ الذي أقرأه» — «الذي»:',
    options: ['اسم موصول مبني في محل رفع نعت', 'اسم موصول مبني في محل جر نعت', 'بدل مرفوع', 'خبر مرفوع'],
    correct: 0
  },
  {
    question: '«هذه جبالٌ راسيةٌ» — النعت «راسية»:',
    options: ['نعت مفرد مؤنث (المطابقة ناقصة)', 'نعت جمع مؤنث', 'خبر مرفوع', 'بدل مرفوع'],
    correct: 0
  },
  {
    question: '«كان الطالب مهذباً رائعاً محترماً» — «رائعاً» و«محترماً»:',
    options: ['أخبار كان (وليست نعوتاً)', 'نعوت منصوبة', 'بدل منصوب', 'حال منصوب'],
    correct: 0
  },
  {
    question: '«قرأتُ القصةَ هذه» — «هذه»:',
    options: ['اسم إشارة مبني في محل نصب نعت', 'اسم إشارة مبني في محل رفع نعت', 'بدل منصوب', 'خبر مرفوع'],
    correct: 0
  }
];

// ====== بناء الاختبارات ======
function renderQuizzes() {
  const container = document.getElementById('quizSection');
  container.innerHTML = '';

  quizData.forEach((q, index) => {
    const box = document.createElement('div');
    box.className = 'quiz-box';

    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question';
    qDiv.innerHTML = `<span class="qnum">${index + 1}</span> ${q.question}`;

    const optsDiv = document.createElement('div');
    optsDiv.className = 'quiz-options';

    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';
    feedback.id = `feedback-${index}`;

    q.options.forEach((optText, optIndex) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.type = 'button';
      btn.textContent = optText;
      btn.dataset.index = optIndex;
      btn.addEventListener('click', () => handleAnswer(index, optIndex, optsDiv, feedback));
      optsDiv.appendChild(btn);
    });

    box.appendChild(qDiv);
    box.appendChild(optsDiv);
    box.appendChild(feedback);
    container.appendChild(box);
  });
}

// ====== معالجة الإجابة ======
function handleAnswer(qIndex, selectedIndex, optsDiv, feedback) {
  const q = quizData[qIndex];
  const buttons = optsDiv.querySelectorAll('.quiz-option');

  // منع الإجابة مرتين
  if (optsDiv.dataset.answered === 'true') return;
  optsDiv.dataset.answered = 'true';
  buttons.forEach(btn => btn.disabled = true);

  const isCorrect = selectedIndex === q.correct;

  // إظهار الإجابة الصحيحة دايماً
  buttons[q.correct].classList.add('correct');
  // لو اختار غلط، لوّن اختياره بالغلط
  if (!isCorrect) {
    buttons[selectedIndex].classList.add('wrong');
  }

  if (isCorrect) {
    feedback.textContent = '✅ إجابة صحيحة!';
    feedback.style.color = '#1e3a2f';
  } else {
    feedback.textContent = `❌ إجابة غير صحيحة. الصواب: «${q.options[q.correct]}»`;
    feedback.style.color = '#a53f22';
  }
}

// ====== إعادة جميع الأسئلة ======
function resetAllQuizzes() {
  renderQuizzes();
  const quizSection = document.querySelector('#quizSection');
  if (quizSection) {
    window.scrollTo({
      top: quizSection.offsetTop - 20,
      behavior: 'smooth'
    });
  }
}

// ====== تشغيل عند التحميل ======
document.addEventListener('DOMContentLoaded', renderQuizzes);