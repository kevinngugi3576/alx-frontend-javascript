export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push('Guardrail was processed', mathFunction());
  } catch (err) {
    queue.push('Guardrail was processed', `Error: ${err.message}`);
  }

  return queue;
}

