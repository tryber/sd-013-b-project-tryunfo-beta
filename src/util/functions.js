function getCardsNameFilter(datas, cardNameFilter) {
  return (
    (cardNameFilter !== '')
      ? datas.filter((data) => data.cardName.includes(cardNameFilter))
      : datas
  );
}

function getCardsRareFilter(datas, cardRareFilter) {
  return (
    (cardRareFilter !== 'todas')
      ? datas.filter((data) => data.cardRare === cardRareFilter)
      : datas
  );
}

export default function getCardsFiltered(datas, cardTrunfoFilter,
  cardRareFilter, cardNameFilter) {
  return ((cardTrunfoFilter)
    ? datas.filter((data) => data.cardTrunfo === true)
    : getCardsNameFilter(
      getCardsRareFilter(datas, cardRareFilter),
      cardNameFilter,
    )
  );
}
