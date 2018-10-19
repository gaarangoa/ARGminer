def nomenclature_prediction(q="", k=10, threshold=0, ft_model=[]):
    labels, probas = ft_model.predict(q, k, threshold)
    return [{"nomenclature": l.replace("__label__", "").replace("__", ""), "probability": p} for l, p in zip(labels, probas)]
