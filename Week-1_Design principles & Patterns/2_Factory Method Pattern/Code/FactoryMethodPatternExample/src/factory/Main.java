package factory;

public class Launcher {
    public static void main(String[] args) {
        Creator wordCreator = new WordCreator();
        Document wordDoc = wordCreator.generateDocument();
        wordDoc.open();

        Creator pdfCreator = new PDFCreator();
        Document pdfDoc = pdfCreator.generateDocument();
        pdfDoc.open();

        Creator excelCreator = new ExcelCreator();
        Document excelDoc = excelCreator.generateDocument();
        excelDoc.open();
    }
}
