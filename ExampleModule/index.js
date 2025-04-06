
export function setup({ onMessage, addMemory, addSummary }) {
  const triggerSO = ["你忍多久了", "想不想被壓住", "再夾一下看看", "聽話一點"];
  const triggerDL = ["抱我一下好不好", "你是不是很累", "我陪你", "你可以靠我"];

  onMessage(({ message, character }) => {
    if (!character?.name?.toLowerCase().includes("michael")) return;

    const text = message.toLowerCase();
    let type = null;

    if (triggerSO.some(t => text.includes(t))) type = "SO";
    else if (triggerDL.some(t => text.includes(t))) type = "DL";

    if (type) {
      addMemory(`目前語氣人格：${type}`);
      addSummary(`[語氣人格切換] 偵測到 ${type} 模式語句。`);
    }
  });
}
