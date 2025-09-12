// البيانات: الصفوف → المواد → المواعيد
const schedules = {

  prep1: {
    "سنتر الساحر":  [
      "المجموعة الأولى\nالاثنين من ١٢:٣٠م إلى ٣م",
      "المجموعة الثانية\nالاثنين من ٢:٣٠م إلى ٥م",
      "المجموعة الثالثة (خاص بالمسائي)\nالثلاثاء من ٨ ص إلى ١٠ ص"
    ]
    
  },


  prep2: {
    "سنتر الساحر": [
      "المجموعة الأولى\nالأحد من ١٢:٣٠م إلى ٣م",
      "المجموعة الثانية\nالأحد من ٢:٣٠م إلى ٥م",
      "المجموعة الثالثة (خاص بالمسائي)\nالثلاثاء من ١٠ ص إلى ١٢ ص"
    ]
    
  },
  prep3: {
    "سنتر الساحر":  [
      "المجموعة الأولى\nالسبت من ١٢:٣٠م إلى ٣م",
      "المجموعة الثانية\nالسبت من ٢:٣٠م إلى ٥م"
    ]
    
  },
  sec1: {
    "سنتر الساحر": ["المجموعة الاولي \nالسبت الساعة ٤:٣٠م"],
    "سنتر المميز": ["المجموعة الثانية \nالثلاثاء الساعة ٢:٣٠م"]
  },
  sec2: {
    "سنتر الساحر":  [
      "المجموعة الأولى\nالأحد الساعة ٤:٣٠م (علمي)",
      "المجموعة الثانية\nالاثنين الساعة ٤:٣٠م (علمي وأدبي)"],
    "سنتر التمييز ": [
      "المجموعة الأولى\nالثلاثاء الساعة ١م (علمي)",
      "المجموعة الثانية\nالأربعاء الساعة ٢:٣٠م (علمي وأدبي)"
    ]
  },
  sec3: {
    "سنتر الساحر -احصاء,ادبي": ["الاربعاء الساعة ١٢م"],
    "سنتر الساحر - رياضيات,علمي": ["الاربعاء الساعة ٨ص \nالخميس الساعة ١١ص"]
  }
};

// عرض المواد عند اختيار الصف
function showSchedule(className) {
  const popup = document.getElementById('popup');
  const title = document.getElementById('class-title');
  const list = document.getElementById('schedule-list');

  title.innerText = className;
  list.innerHTML = "";

  if (schedules[className]) {
    Object.keys(schedules[className]).forEach(subject => {
      const div = document.createElement('div');
      div.className = "schedule-box";
      div.textContent = subject;
      div.onclick = () => showSubjectSchedule(className, subject);
      list.appendChild(div);
    });
  } else {
    list.innerHTML = "<p>لا توجد بيانات</p>";
  }

  popup.style.display = "flex";
}

// عرض مواعيد المادة
function showSubjectSchedule(className, subject) {
  const title = document.getElementById('class-title');
  const list = document.getElementById('schedule-list');

  title.innerText = subject;
  list.innerHTML = "";

  schedules[className][subject].forEach(item => {
    const div = document.createElement('div');
    div.className = "schedule-box";
    div.innerHTML = item.replace(/\n/g, "<br>");
    list.appendChild(div);
  });
}

function closePopup() {
  document.getElementById('popup').style.display = "none";
}
