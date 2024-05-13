export function formatConvHistory(messages: string[]) {
  return messages
    .map((message, i) => {
      if (i % 2 === 0) {
        return `AI: ${message}`;
      } else {
        return `Human: ${message}`;
      }
    })
    .join("\n");
}
