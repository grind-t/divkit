// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivTooltip: Sendable {
  @frozen
  public enum Position: String, CaseIterable, Sendable {
    case left = "left"
    case topLeft = "top-left"
    case top = "top"
    case topRight = "top-right"
    case right = "right"
    case bottomRight = "bottom-right"
    case bottom = "bottom"
    case bottomLeft = "bottom-left"
    case center = "center"
  }

  public let animationIn: DivAnimation?
  public let animationOut: DivAnimation?
  public let div: Div
  public let duration: Expression<Int> // constraint: number >= 0; default value: 5000
  public let id: String
  public let offset: DivPoint?
  public let position: Expression<Position>

  public func resolveDuration(_ resolver: ExpressionResolver) -> Int {
    resolver.resolveNumeric(duration) ?? 5000
  }

  public func resolvePosition(_ resolver: ExpressionResolver) -> Position? {
    resolver.resolveEnum(position)
  }

  static let durationValidator: AnyValueValidator<Int> =
    makeValueValidator(valueValidator: { $0 >= 0 })

  init(
    animationIn: DivAnimation? = nil,
    animationOut: DivAnimation? = nil,
    div: Div,
    duration: Expression<Int>? = nil,
    id: String,
    offset: DivPoint? = nil,
    position: Expression<Position>
  ) {
    self.animationIn = animationIn
    self.animationOut = animationOut
    self.div = div
    self.duration = duration ?? .value(5000)
    self.id = id
    self.offset = offset
    self.position = position
  }
}

#if DEBUG
extension DivTooltip: Equatable {
  public static func ==(lhs: DivTooltip, rhs: DivTooltip) -> Bool {
    guard
      lhs.animationIn == rhs.animationIn,
      lhs.animationOut == rhs.animationOut,
      lhs.div == rhs.div
    else {
      return false
    }
    guard
      lhs.duration == rhs.duration,
      lhs.id == rhs.id,
      lhs.offset == rhs.offset
    else {
      return false
    }
    guard
      lhs.position == rhs.position
    else {
      return false
    }
    return true
  }
}
#endif

extension DivTooltip: Serializable {
  public func toDictionary() -> [String: ValidSerializationValue] {
    var result: [String: ValidSerializationValue] = [:]
    result["animation_in"] = animationIn?.toDictionary()
    result["animation_out"] = animationOut?.toDictionary()
    result["div"] = div.toDictionary()
    result["duration"] = duration.toValidSerializationValue()
    result["id"] = id
    result["offset"] = offset?.toDictionary()
    result["position"] = position.toValidSerializationValue()
    return result
  }
}
