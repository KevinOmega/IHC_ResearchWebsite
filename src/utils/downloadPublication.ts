const blankPdfBase64 =
  'JVBERi0xLjQKJdP0zOEKMSAwIG9iago8PAovVHlwZS9DYXRhbG9nCi9QYWdlcyAyIDAgUgo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZS9QYWdlcwovS2lkc1sgMyAwIFIgXQovQ291bnQgMQo+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZS9QYWdlCi9NZWRpYUJveFswIDAgNTk1IDIgNzkyXQovUGFyZW50IDIgMCBSCi9SZXNvdXJjZXMgPDwvRm9udCA8PC9GMSA0IDAgUiA+PiA+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwvVHlwZS9Gb250Ci9TdWJ0eXBlL1R5cGUxCi9CYXNlRm9udC9IZWx2ZXRpY2EKL0VuY29kaW5nL1dpbkFuc2lcPj4KZW5kb2JqCjUgMCBvYmoKPDwvTGVuZ3RoIDY5Pj4Kc3RyZWFtCkJUIAovRjEgMTIgVGYKMTAgNzY1IFRkCigpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKc3RhcnR4cmVmCjMwNwpFT0Y=';

export function downloadPublicationPlaceholder(title: string) {
  try {
    const binary = atob(blankPdfBase64);
    const bytes = new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }

    const pdfBlob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(pdfBlob);
    const pdfWindow = window.open(url, '_blank');
    if (pdfWindow) {
      pdfWindow.document.title = `Investigación - ${title}`;
    }

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 60_000);
  } catch (error) {
    console.error('Error al generar el PDF temporal:', error);
  }
}
