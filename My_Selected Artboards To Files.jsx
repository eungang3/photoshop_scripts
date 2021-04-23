// ��� ��Ʈ���带 jpeg ���Ϸ� ����

var doc = activeDocument;
artboardsToJPEG()
customAlert('������ �Ϸ��߽��ϴ�', 0.3, 'Notice')

// ����
function artboardsToJPEG() {
    // ������ ��Ʈ���常 ��ױ�
    var selectedSet = doc.activeLayer;
    selectedSet.allLocked = true;

    var count = doc.layerSets.length
    for (i = 0; i < count; i++) {
        if (doc.layerSets[i].allLocked == true) {
            altClick(i)
            saveIt(doc.layerSets[i].name)
        }
        if (i == count - 1 && doc.layerSets[i].allLocked == true) {
            altClick(i)
        }
        else {
            altClick(i)
            altClick(i)
        }
    }
    // ������ ��Ʈ���� ��� ����
    selectedSet.allLocked = false;

}

// ���̾� alt + click (Ŭ���� ���̾ ����/����)
function altClick(num) {
    var idShw = charIDToTypeID("Shw ");
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var list = new ActionList();
    var ref = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref.putName(idLyr, doc.layerSets[num].name);
    list.putReference(ref);
    desc.putList(idnull, list);
    var idTglO = charIDToTypeID("TglO");
    desc.putBoolean(idTglO, true);
    executeAction(idShw, desc, DialogModes.NO);
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