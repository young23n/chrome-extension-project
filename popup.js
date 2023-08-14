$('#btn').on("click", function() {// 선택 버튼 클릭시 이벤트
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {//현재 활성화된 탭 가져오기(활성화 확인, 현재 창 확인)
    chrome.tabs.sendMessage(tabs[0].id, "apply"); // 현재 탭에 메세지 보내기 
  });
});
$('#cancel').on("click", function() { // 이전 선택 취소 버튼 클릭시 이벤트
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "cancel");
  });
})