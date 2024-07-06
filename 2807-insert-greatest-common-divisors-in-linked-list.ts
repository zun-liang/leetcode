class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const gcd = (a: number, b: number): number => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const insertGreatestCommonDivisors = (
  head: ListNode | null
): ListNode | null => {
  if (!head || !head.next) {
    return head;
  }

  let current = head;

  while (current && current.next) {
    const gcbValue = gcd(current.val, current.next.val);
    const newNode = new ListNode(gcbValue, current.next);
    current.next = newNode;
    current = newNode.next!;
  }

  return head;
};
