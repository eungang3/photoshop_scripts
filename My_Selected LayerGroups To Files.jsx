// ������ ���̾� �׷츸 jpeg ���Ϸ� ����
var doc = activeDocument;
EachGroupToJPEG();
customAlert('������ �Ϸ��߽��ϴ�', 0.4, 'Notice')

// ���� 
function EachGroupToJPEG() {

    // ������ ���̾ ��ױ�
    var selectedSet = doc.activeLayer;
    selectedSet.allLocked = true;
    var count = doc.layerSets.length;

    for (var i = 0; i < count; i++) {
        if (doc.layerSets[i].allLocked == true) {
            doc.layerSets[i].visible = true;
            saveIt(doc.layerSets[i].name)
            doc.layerSets[i].visible = false;
        }
    }

    // ������ ���̾� ��� ����
    selectedSet.allLocked = false;
}

// �����ϱ�
function saveIt(name) {
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.JPEG;
    options.quality = 60;
    doc.exportDocument(new File(decodeURI(doc.fullName.parent) + '/' + name + '.jpg'), ExportType.SAVEFORWEB, options)
}

// alert â ���� ������ �ð� �� �ڵ����� ���� 
function customAlert(message, delaySeconds, title) {
    var alertWindow = new Window('palette', title);
    var control_text = alertWindow.add('edittext', [0, 0, 500, 200], message, { multiline: true });
    alertWindow.show();
    alertWindow.update();
    $.sleep(delaySeconds * 1000);
    alertWindow.hide();
    alertWindow = null;
}
