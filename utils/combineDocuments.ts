export function combineDocuments(docs: any) {
  return docs.map((doc: { pageContent: any }) => doc.pageContent).join("\n\n");
}
