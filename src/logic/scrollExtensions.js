/**
 * Returns the scroll parent of an element along a specified axis and the scroll size and client size.
 *
 * @link https://gist.github.com/oscarmarina/3a546cff4d106a49a5be417e238d9558
 *
 * @param {HTMLElement} el - The element to find the scroll parent of.
 * @param {String} [axis='y'] - The axis to find the scroll parent for.
 * @returns {Object} An object with the following properties:
 * @property {HTMLElement} scrollParent - The scroll parent element.
 * @property {Number} scrollParentSize - The size of the scroll parent along the specified axis.
 * @property {Number} clientParentSize - The size of the scroll parent's client area along the specified axis.
 */
function getScrollParent(node, axis = 'y') {
  let el = node

  if (!(el instanceof HTMLElement || el instanceof ShadowRoot)) return null

  if (el instanceof ShadowRoot) el = el.host

  if (axis !== 'y' && axis !== 'x') axis = 'y'
  const wantsYAxis = axis === 'y'

  const style = window.getComputedStyle(el)

  const overflow = wantsYAxis ? style.overflowY : style.overflowX
  const scrollSize = wantsYAxis ? el.scrollHeight : el.scrollWidth
  const clientSize = wantsYAxis ? el.clientHeight : el.clientWidth

  const isScrollable = !overflow.includes('visible') && !overflow.includes('hidden')
  const isScrolled = scrollSize > clientSize

  if (isScrollable && isScrolled)
    return {
      scrollParent: el,
      scrollParentSize: scrollSize,
      clientParentSize: clientSize,
    }

  return (
    getScrollParent(el.parentNode, axis) || {
      scrollParent: document.scrollingElement || document.body,
      scrollParentSize: scrollSize,
      clientParentSize: clientSize,
    }
  )
}

export { getScrollParent }
