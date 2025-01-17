import LayoutKit
import LayoutKitPlayground
import PlaygroundSupport
import UIKit
import VGSL

private func createBlock() throws -> Block {
  try ContainerBlock(
    layoutDirection: .vertical,
    horizontalChildrenAlignment: .center,
    verticalChildrenAlignment: .center,
    children: [
      TextBlock(
        widthTrait: .intrinsic,
        text: "Some text.".with(typo: Typo(size: 26.0, weight: .medium).with(color: .blue))
      ),
    ]
  ).addingDecorations(
    boundary: .clipCorner(
      CornerRadii(
        100.0
      )
    ),
    border: BlockBorder(
      color: .black,
      width: 5.0
    ),
    backgroundColor: .green
  )
}

PlaygroundPage.current.liveView = LayoutKitPlaygroundViewController(blockProvider: createBlock)
