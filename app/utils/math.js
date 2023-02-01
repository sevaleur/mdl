export function calc_pos(scroll_speed, mesh_scale, wholeheight, height, margin)
{
  let calc_pos = (scroll_speed + mesh_scale + wholeheight + height + margin) % wholeheight - height - margin

  return calc_pos
}
