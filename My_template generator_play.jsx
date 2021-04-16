// ���̹� ���ø�

// ���� ������ �ȼ��� ����
var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

// ���� �����
var docRef = documents.add(960, 960, 72, '���̹�');
var doc = activeDocument;

// ���ϴ� Ƚ����ŭ ���̾� �׷� �����
makeLayers(10);

// ��׶��� ���̾� ��� ���� �� ����
doc.activeLayer.isBackgroundLayer = false;
doc.artLayers[0].remove()

function makeLayers(count) {
    
    // ������ Ƚ����ŭ ���̾� �׷� ����
    for (i = 1; i <= count; i++) {

        // �� �׷� ����
        var newLayerSetRef = doc.layerSets.add();
        newLayerSetRef.name = i;

        // ��׶��� ���̾� ���� �� ������� ä��� ���
        var backLayer = doc.artLayers.add();
        backLayer.name = 'background';

        var backgroundColor = new SolidColor;
        backgroundColor.rgb.red = 255;
        backgroundColor.rgb.red = 255;
        backgroundColor.rgb.red = 255;        
        doc.selection.selectAll;
        doc.selection.fill(backgroundColor);

        backLayer.allLocked = true;

        // ����ġ ���̾� ���� �� ���۽�Ƽ ����
        var sketchLayer = activeDocument.artLayers.add();
        sketchLayer.name = 'sketch';
        sketchLayer.opacity = 25;

        // ���̾� �� ���� �׷����� �̵�
        backLayer.move(newLayerSetRef, ElementPlacement.INSIDE);
        sketchLayer.move(newLayerSetRef, ElementPlacement.INSIDE);
    }    
}


