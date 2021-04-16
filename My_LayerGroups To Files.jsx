// �� �׷��� jpeg ���Ϸ� ����
var doc = activeDocument;
alert(doc.layerSets[0].name)
groupsToJPEG()


function groupsToJPEG() {
    // �׷� ���� ����
    var count = doc.layerSets.length

    // ���������� �׷� �Ѱ�, �����ϰ�, ���� 
    for (i = 0; i < count; i++) {
        doc.layerSets[i].visible = true;
        saveIt(doc.layerSets[i].name)
        doc.layerSets[i].visible = false;
    }
}

function saveIt(name) {
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.JPEG;
    options.quality = 60;
    doc.exportDocument(new File(decodeURI(doc.fullName.parent) + '/' + name + '.jpg'), ExportType.SAVEFORWEB, options)    
}

