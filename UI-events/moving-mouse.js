// Moving the mouse: mouseover/out, mouseenter/leave
/**
 * - events  that happen when the mouse moves between elements.
 * 
 * // Events mouseover/mouseout, relatedTarget
 * - The mouseover event occurs when a mouse pointer comes over an element, and mouseout-when it leaves.
 * - These events are special since they have property relatedTarget. This property complements target. When a mouse leaves one element for another, one of them becomes target, and the other one - relatedTarget.
 * For mouseover:
 * - event.target - is the element where the mouse came over.
 * - event.relatedTarget - is the element from which the mouse came(relatedTarget - target)
 * 
 * For mouseout the reverse:
 * - event.target - is the element that the mouse left.
 * - event.relatedTarget - is the new under-the-pointer element, that mouse left for (target -> relatedTarget).
 * 
 * - Each event has the information about both target and relatedTarget:
 * 
 * ===Skipping elements===
 * - The mousemove event triggers when the mouse moves. The browser checks mouse position from time to time. It notices changes then triggers the events. 
 * This means that when the visitor is moving the mouse very fast then some DOM elements may be skipped:
 * 
 * ===Mouseout when leaving for a child===
 * An important featur of mouseout - it triggers, when the pointer moves from an element to its descendant, e.g. from #parent to #child in this HTML:
 * 
 */