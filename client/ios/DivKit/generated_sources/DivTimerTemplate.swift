// Generated code. Do not modify.

import Foundation
import Serialization
import VGSL

public final class DivTimerTemplate: TemplateValue, Sendable {
  public let duration: Field<Expression<Int>>? // constraint: number >= 0; default value: 0
  public let endActions: Field<[DivActionTemplate]>?
  public let id: Field<String>?
  public let tickActions: Field<[DivActionTemplate]>?
  public let tickInterval: Field<Expression<Int>>? // constraint: number > 0
  public let valueVariable: Field<String>?

  public convenience init(dictionary: [String: Any], templateToType: [TemplateName: String]) throws {
    self.init(
      duration: dictionary.getOptionalExpressionField("duration"),
      endActions: dictionary.getOptionalArray("end_actions", templateToType: templateToType),
      id: dictionary.getOptionalField("id"),
      tickActions: dictionary.getOptionalArray("tick_actions", templateToType: templateToType),
      tickInterval: dictionary.getOptionalExpressionField("tick_interval"),
      valueVariable: dictionary.getOptionalField("value_variable")
    )
  }

  init(
    duration: Field<Expression<Int>>? = nil,
    endActions: Field<[DivActionTemplate]>? = nil,
    id: Field<String>? = nil,
    tickActions: Field<[DivActionTemplate]>? = nil,
    tickInterval: Field<Expression<Int>>? = nil,
    valueVariable: Field<String>? = nil
  ) {
    self.duration = duration
    self.endActions = endActions
    self.id = id
    self.tickActions = tickActions
    self.tickInterval = tickInterval
    self.valueVariable = valueVariable
  }

  private static func resolveOnlyLinks(context: TemplatesContext, parent: DivTimerTemplate?) -> DeserializationResult<DivTimer> {
    let durationValue = { parent?.duration?.resolveOptionalValue(context: context, validator: ResolvedValue.durationValidator) ?? .noValue }()
    let endActionsValue = { parent?.endActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue }()
    let idValue = { parent?.id?.resolveValue(context: context) ?? .noValue }()
    let tickActionsValue = { parent?.tickActions?.resolveOptionalValue(context: context, useOnlyLinks: true) ?? .noValue }()
    let tickIntervalValue = { parent?.tickInterval?.resolveOptionalValue(context: context, validator: ResolvedValue.tickIntervalValidator) ?? .noValue }()
    let valueVariableValue = { parent?.valueVariable?.resolveOptionalValue(context: context) ?? .noValue }()
    var errors = mergeErrors(
      durationValue.errorsOrWarnings?.map { .nestedObjectError(field: "duration", error: $0) },
      endActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "end_actions", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      tickActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "tick_actions", error: $0) },
      tickIntervalValue.errorsOrWarnings?.map { .nestedObjectError(field: "tick_interval", error: $0) },
      valueVariableValue.errorsOrWarnings?.map { .nestedObjectError(field: "value_variable", error: $0) }
    )
    if case .noValue = idValue {
      errors.append(.requiredFieldIsMissing(field: "id"))
    }
    guard
      let idNonNil = idValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivTimer(
      duration: { durationValue.value }(),
      endActions: { endActionsValue.value }(),
      id: { idNonNil }(),
      tickActions: { tickActionsValue.value }(),
      tickInterval: { tickIntervalValue.value }(),
      valueVariable: { valueVariableValue.value }()
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  public static func resolveValue(context: TemplatesContext, parent: DivTimerTemplate?, useOnlyLinks: Bool) -> DeserializationResult<DivTimer> {
    if useOnlyLinks {
      return resolveOnlyLinks(context: context, parent: parent)
    }
    var durationValue: DeserializationResult<Expression<Int>> = { parent?.duration?.value() ?? .noValue }()
    var endActionsValue: DeserializationResult<[DivAction]> = .noValue
    var idValue: DeserializationResult<String> = { parent?.id?.value() ?? .noValue }()
    var tickActionsValue: DeserializationResult<[DivAction]> = .noValue
    var tickIntervalValue: DeserializationResult<Expression<Int>> = { parent?.tickInterval?.value() ?? .noValue }()
    var valueVariableValue: DeserializationResult<String> = { parent?.valueVariable?.value() ?? .noValue }()
    _ = {
      // Each field is parsed in its own lambda to keep the stack size managable
      // Otherwise the compiler will allocate stack for each intermediate variable
      // upfront even when we don't actually visit a relevant branch
      for (key, __dictValue) in context.templateData {
        _ = {
          if key == "duration" {
           durationValue = deserialize(__dictValue, validator: ResolvedValue.durationValidator).merged(with: durationValue)
          }
        }()
        _ = {
          if key == "end_actions" {
           endActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: endActionsValue)
          }
        }()
        _ = {
          if key == "id" {
           idValue = deserialize(__dictValue).merged(with: idValue)
          }
        }()
        _ = {
          if key == "tick_actions" {
           tickActionsValue = deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self).merged(with: tickActionsValue)
          }
        }()
        _ = {
          if key == "tick_interval" {
           tickIntervalValue = deserialize(__dictValue, validator: ResolvedValue.tickIntervalValidator).merged(with: tickIntervalValue)
          }
        }()
        _ = {
          if key == "value_variable" {
           valueVariableValue = deserialize(__dictValue).merged(with: valueVariableValue)
          }
        }()
        _ = {
         if key == parent?.duration?.link {
           durationValue = durationValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.durationValidator) })
          }
        }()
        _ = {
         if key == parent?.endActions?.link {
           endActionsValue = endActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
          }
        }()
        _ = {
         if key == parent?.id?.link {
           idValue = idValue.merged(with: { deserialize(__dictValue) })
          }
        }()
        _ = {
         if key == parent?.tickActions?.link {
           tickActionsValue = tickActionsValue.merged(with: { deserialize(__dictValue, templates: context.templates, templateToType: context.templateToType, type: DivActionTemplate.self) })
          }
        }()
        _ = {
         if key == parent?.tickInterval?.link {
           tickIntervalValue = tickIntervalValue.merged(with: { deserialize(__dictValue, validator: ResolvedValue.tickIntervalValidator) })
          }
        }()
        _ = {
         if key == parent?.valueVariable?.link {
           valueVariableValue = valueVariableValue.merged(with: { deserialize(__dictValue) })
          }
        }()
      }
    }()
    if let parent = parent {
      _ = { endActionsValue = endActionsValue.merged(with: { parent.endActions?.resolveOptionalValue(context: context, useOnlyLinks: true) }) }()
      _ = { tickActionsValue = tickActionsValue.merged(with: { parent.tickActions?.resolveOptionalValue(context: context, useOnlyLinks: true) }) }()
    }
    var errors = mergeErrors(
      durationValue.errorsOrWarnings?.map { .nestedObjectError(field: "duration", error: $0) },
      endActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "end_actions", error: $0) },
      idValue.errorsOrWarnings?.map { .nestedObjectError(field: "id", error: $0) },
      tickActionsValue.errorsOrWarnings?.map { .nestedObjectError(field: "tick_actions", error: $0) },
      tickIntervalValue.errorsOrWarnings?.map { .nestedObjectError(field: "tick_interval", error: $0) },
      valueVariableValue.errorsOrWarnings?.map { .nestedObjectError(field: "value_variable", error: $0) }
    )
    if case .noValue = idValue {
      errors.append(.requiredFieldIsMissing(field: "id"))
    }
    guard
      let idNonNil = idValue.value
    else {
      return .failure(NonEmptyArray(errors)!)
    }
    let result = DivTimer(
      duration: { durationValue.value }(),
      endActions: { endActionsValue.value }(),
      id: { idNonNil }(),
      tickActions: { tickActionsValue.value }(),
      tickInterval: { tickIntervalValue.value }(),
      valueVariable: { valueVariableValue.value }()
    )
    return errors.isEmpty ? .success(result) : .partialSuccess(result, warnings: NonEmptyArray(errors)!)
  }

  private func mergedWithParent(templates: [TemplateName: Any]) throws -> DivTimerTemplate {
    return self
  }

  public func resolveParent(templates: [TemplateName: Any]) throws -> DivTimerTemplate {
    let merged = try mergedWithParent(templates: templates)

    return DivTimerTemplate(
      duration: merged.duration,
      endActions: merged.endActions?.tryResolveParent(templates: templates),
      id: merged.id,
      tickActions: merged.tickActions?.tryResolveParent(templates: templates),
      tickInterval: merged.tickInterval,
      valueVariable: merged.valueVariable
    )
  }
}
