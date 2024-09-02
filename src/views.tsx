export function buttonStyle(
  idx: number,
  length: number
) {
  const isFirst = idx === 0
  const isLast = idx === length - 1

  return {
    /** common style */
    backgroundColor: '$gray1',
    justifyContent: 'flex-start',
    height: 'auto',
    padding: '$4',
    /** disable for all the items but first one */
    borderTopLeftRadius: isFirst ? undefined : 0,
    borderTopRightRadius: isFirst ? undefined : 0,
    /** disable for all the items but last one */
    borderBottomLeftRadius: isLast
      ? undefined
      : 0,
    borderBottomRightRadius: isLast
      ? undefined
      : 0,
    borderBottomColor: isLast
      ? undefined
      : '$gray5',
  } as const
}
