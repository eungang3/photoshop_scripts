// ���� jpeg ���Ϸ� ����

var doc = activeDocument;

// Ȯ����(.psd) �� ���ϸ� ��������
var filename = doc.name.slice(0, -4)
saveIt(filename);

// �����ϱ�
function saveIt(name) {
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.JPEG;
    options.quality = 60;
    doc.exportDocument(new File(decodeURI(doc.fullName.parent) + '/' + name + '.jpg'), ExportType.SAVEFORWEB, options)
}